"use client"

import { useState } from "react"
import { SendHorizontal, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ChatArea() {
  const [mode, setMode] = useState<"search" | "chat">("search")
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([])
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { role: "user", text: input }

    if (mode === "search") {
      setMessages([userMessage])
      setMode("chat")
    } else {
      setMessages((prev) => [...prev, userMessage])
    }

    setInput("")
    setIsTyping(true)

    // Simulate bot reply
    setTimeout(() => {
      const botReply = {
        role: "bot",
        text: "Thanks for your message! How can I assist you further?",
      }

      setMessages((prev) => [...prev, botReply])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="flex h-full flex-col">
      {/* Chat display area */}
      <div className="flex-1 overflow-y-auto p-4">
        {mode === "search" ? (
          <div className="text-center text-gray-500 mt-20 text-lg">
            Start by typing your question in the search box below
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={
                  msg.role === "user"
                    ? "text-right text-blue-600"
                    : "text-left text-gray-700"
                }
              >
                <p className={`inline-block max-w-[70%] rounded-lg px-4 py-2 shadow
                  ${msg.role === "user" ? "bg-gray-100" : "bg-blue-100"}`}>
                  {msg.text}
                </p>
              </div>
            ))}

            {isTyping && (
              <div className="text-left text-gray-500">
                <p className="inline-block max-w-[70%] rounded-lg bg-blue-50 px-4 py-2 shadow animate-pulse">
                  Typing...
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <Input
            className="flex-1"
            placeholder={mode === "search" ? "Search prompts..." : "Type a message..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend} variant="outline">
            {mode === "search" ? <Search className="h-4 w-4" /> : <SendHorizontal className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
