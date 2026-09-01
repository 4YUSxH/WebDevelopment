import { useEffect, useRef, useState } from "react";
import { useChat } from "../hooks/useChat";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

const Dashboard = () => {
  const {
    intializeSocketConnection,
    handleSendMessage,
    handleGetChats,
    handleOpenChat,
  } = useChat();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [message, setMessage] = useState("");

  const chats = useSelector((state) => state.chat.chats);
  const currentChatId = useSelector((state) => state.chat.currentChatId);

  useEffect(() => {
    intializeSocketConnection();
    handleGetChats();
  }, []);

  const sendMessage = async () => {
    if (!message.trim()) return;
    console.log(message);

    setMessage("");

    await handleSendMessage({ message, chat: currentChatId });
  };

  const openChat = (chatId) => {
    handleOpenChat(chatId);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#212121] text-gray-100">
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          flex w-67.5 flex-col
          border-r border-[#2f2f2f]
          bg-[#171717]
          transition-transform duration-200
          md:relative md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* LOGO */}
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white font-bold text-black">
              P
            </div>

            <span className="text-lg font-semibold text-white">Aynora</span>
          </div>
        </div>

        {/* NEW CHAT */}
        <div className="px-3 pb-4">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-200 transition hover:bg-[#2a2a2a]">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14M5 12h14"
              />
            </svg>
            New Thread
          </button>
        </div>

        {/* CHAT TITLES ONLY */}
        <div className="flex-1 overflow-y-auto px-3">
          <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
            Recent
          </p>

          {Object.values(chats).map((chat, idx) => (
            <button
              onClick={() => {
                openChat(chat.id);
              }}
              key={idx}
              className="cursor-pointer mb-1 w-full truncate rounded-lg bg-[#2a2a2a] px-3 py-2.5 text-left text-sm text-gray-100"
            >
              {chat.title}
            </button>
          ))}
        </div>

        {/* USER */}
        <div className="border-t border-[#2f2f2f] p-3">
          <div className="flex items-center gap-3 rounded-lg p-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#444] text-xs font-medium text-white">
              U
            </div>

            <div>
              <p className="text-sm font-medium text-gray-200">User</p>

              <p className="text-xs text-gray-500">Free plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex min-w-0 flex-1 flex-col bg-[#212121]">
        {/* HEADER */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-[#2f2f2f] px-4 sm:px-6">
          <div className="flex items-center gap-3">
            {/* MOBILE MENU */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-gray-400 hover:bg-[#2a2a2a] hover:text-white md:hidden"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-1">
            <button
              className="rounded-lg p-2 text-gray-400 transition hover:bg-[#2a2a2a] hover:text-white"
              title="Share"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 12v7a1 1 0 001 1h8a1 1 0 001-1v-7M12 16V4m0 0L8 8m4-4l4 4"
                />
              </svg>
            </button>

            <button className="rounded-lg px-3 py-2 text-gray-400 hover:bg-[#2a2a2a] hover:text-white">
              ⋯
            </button>
          </div>
        </header>

        {/* CHAT */}
        <section className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
            {/* AI MESSAGE */}
            {chats[currentChatId]?.messages?.map((msg, idx) => (
              <div key={idx}>
                {msg.role === "user" ? (
                  <div className="mb-10 flex justify-end">
                    <div className="max-w-[80%] rounded-2xl bg-[#2f2f2f] px-4 py-3">
                      <p className="text-[15px] leading-6 text-gray-200">
                        {msg.content}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mb-10 flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">
                      P
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="mb-2 text-sm font-semibold text-gray-200">
                        Perplexity
                      </p>

                      <ReactMarkdown
                        components={{
                          p: ({ children }) => (
                            <p className="mb-2 last:mb-0">{children}</p>
                          ),
                          ul: ({ children }) => (
                            <ul className="mb-2 list-disc pl-5">{children}</ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="mb-2 list-decimal pl-5">
                              {children}
                            </ol>
                          ),
                          code: ({ children }) => (
                            <code className="rounded bg-white/10 px-1 py-0.5">
                              {children}
                            </code>
                          ),
                          pre: ({ children }) => (
                            <pre className="mb-2 overflow-x-auto rounded-xl bg-black/30 p-3">
                              {children}
                            </pre>
                          ),
                        }}
                        remarkPlugins={[remarkGfm]}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* INPUT */}
        <footer className="shrink-0 px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="mx-auto max-w-3xl">
            <div className="relative rounded-2xl border border-[#444] bg-[#2f2f2f] shadow-lg focus-within:border-[#666]">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Ask anything..."
                className="min-h-14.5 w-full resize-none bg-transparent px-4 py-4 pr-14 text-[15px] leading-6 text-gray-100 outline-none placeholder:text-gray-500"
              />

              <button
                onClick={sendMessage}
                disabled={!message.trim()}
                className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </button>
            </div>

            <p className="mt-2 text-center text-[11px] text-gray-600">
              Perplexity may make mistakes. Check important information.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
