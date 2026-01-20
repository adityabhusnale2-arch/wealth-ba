import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type ChatMsg = { role: "user" | "assistant"; content: string };

const GREETING =
  "Hi 👋 I’m Wealth BA AI. I’ll help you plan your financial goals and suggest suitable investment options. Let’s get started.";

export default function AdityaChat() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    if (messages.length > 0) return;
    setMessages([{ role: "assistant", content: GREETING }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open) return;
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  }, [open, messages]);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const nextMessages: ChatMsg[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("aditya-chat", {
        body: { messages: nextMessages },
      });
      if (error) throw error;
      const reply = (data as any)?.reply as string | undefined;
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply?.trim() || "Sorry, I couldn’t respond. Please try again." },
      ]);
    } catch (e: any) {
      const msg = typeof e?.message === "string" ? e.message : "Chat failed";
      toast({
        title: "Chat error",
        description: msg,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button (kept above WhatsApp button) */}
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 md:bottom-32 md:right-8 z-50 rounded-full h-12 w-12 p-0 shadow-lg"
        aria-label="Chat with Aditya"
      >
        <Bot className="h-6 w-6" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => !loading && setOpen(false)}
          />
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-[92vw] max-w-md">
            <Card className="shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-semibold">Aditya</div>
                    <div className="text-xs text-muted-foreground">Wealth BA AI</div>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => !loading && setOpen(false)}
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div ref={listRef} className="h-[55vh] max-h-[520px] overflow-y-auto p-4 space-y-3">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={
                      m.role === "user"
                        ? "flex justify-end"
                        : "flex justify-start"
                    }
                  >
                    <div
                      className={
                        m.role === "user"
                          ? "max-w-[85%] rounded-2xl rounded-br-sm bg-primary text-primary-foreground px-3 py-2 text-sm"
                          : "max-w-[85%] rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-sm"
                      }
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-sm text-muted-foreground">
                      Typing…
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t p-3 bg-background">
                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    send();
                  }}
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message…"
                    disabled={loading}
                    aria-label="Message"
                  />
                  <Button type="submit" disabled={!canSend} aria-label="Send">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  Educational guidance only. No return promises.
                </p>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
