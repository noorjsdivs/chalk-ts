"use client";

import { useState } from "react";
import { runServerTest } from "./actions";
import { AnsiDisplay } from "./components/AnsiDisplay";

export default function Home() {
  const [output, setOutput] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("colors");
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

  const runTest = async (id: string) => {
    setLoading(true);
    setCopied(false);
    try {
      const result = await runServerTest(id);
      setOutput(result.output);
      setCode(result.code);
    } catch (e) {
      setOutput(`Error: ${e}`);
      setCode("// Error fetching code");
    } finally {
      setLoading(false);
    }
  };

  const copyCode = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
              CT
            </div>
            <span className="font-bold text-lg tracking-tight">chalk-ts</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
              v1.0.1
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.npmjs.com/package/chalk-ts"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <svg
                className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H2.665v-5.333h4v1.333zM12 11.996h-1.332v1.332h-1.334v-4H12v2.668zm5.333-2.664v1.332h-2.667v1.334h2.667v1.333h-4v-5.333h4z" />
              </svg>
              npm
            </a>
            <a
              href="https://github.com/noorjsdivs/chalk-ts"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar / Controls */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
              {["colors", "styles", "effects", "utils"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-white/10 text-white shadow-inner"
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="p-5 min-h-[400px]">
              {activeTab === "colors" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                  <ControlGroup title="Basic Colors">
                    <ActionBtn
                      onClick={() => runTest("colors-basic")}
                      color="blue"
                    >
                      Standard Palette
                    </ActionBtn>
                    <ActionBtn
                      onClick={() => runTest("colors-bright")}
                      color="yellow"
                    >
                      Bright Palette
                    </ActionBtn>
                  </ControlGroup>
                  <ControlGroup title="Extended">
                    <ActionBtn
                      onClick={() => runTest("colors-extended")}
                      color="purple"
                    >
                      20+ Extended Colors
                    </ActionBtn>
                  </ControlGroup>
                  <ControlGroup title="TrueColor">
                    <ActionBtn
                      onClick={() => runTest("advanced-rgb")}
                      color="cyan"
                    >
                      RGB (TrueColor)
                    </ActionBtn>
                    <ActionBtn
                      onClick={() => runTest("advanced-hex")}
                      color="pink"
                    >
                      HEX & HSL
                    </ActionBtn>
                  </ControlGroup>
                </div>
              )}

              {activeTab === "styles" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                  <ControlGroup title="Text Modifiers">
                    <ActionBtn onClick={() => runTest("modifiers")}>
                      Bold, Italic, Dim...
                    </ActionBtn>
                  </ControlGroup>
                  <ControlGroup title="Backgrounds">
                    <ActionBtn onClick={() => runTest("bg-basic")} color="red">
                      Background Colors
                    </ActionBtn>
                  </ControlGroup>
                  <ControlGroup title="Nesting">
                    <ActionBtn
                      onClick={() => runTest("nesting-complex")}
                      color="emerald"
                    >
                      Complex Nesting
                    </ActionBtn>
                  </ControlGroup>
                </div>
              )}

              {activeTab === "effects" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                  <ControlGroup title="Animations & Art">
                    <ActionBtn
                      onClick={() => runTest("effects-fun")}
                      color="indigo"
                    >
                      Rainbow, Pulse, Neon...
                    </ActionBtn>
                    <ActionBtn
                      onClick={() => runTest("gradient")}
                      color="gradient"
                    >
                      Gradients
                    </ActionBtn>
                  </ControlGroup>
                  <ControlGroup title="Layout">
                    <ActionBtn
                      onClick={() => runTest("effects-boxes")}
                      color="orange"
                    >
                      Box Styles
                    </ActionBtn>
                    <ActionBtn
                      onClick={() => runTest("effects-layout")}
                      color="teal"
                    >
                      Tables & Progress
                    </ActionBtn>
                  </ControlGroup>
                  <ControlGroup title="Theming">
                    <ActionBtn onClick={() => runTest("theme")} color="gray">
                      Semantic Themes
                    </ActionBtn>
                  </ControlGroup>
                </div>
              )}

              {activeTab === "utils" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                  <ControlGroup title="Utilities">
                    <ActionBtn onClick={() => runTest("utilities")}>
                      Strip / Length / Template
                    </ActionBtn>
                  </ControlGroup>
                  <ControlGroup title="Verification">
                    <ActionBtn onClick={() => runTest("all")} color="green">
                      Run All Verification
                    </ActionBtn>
                  </ControlGroup>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-4 border border-blue-500/10 backdrop-blur-sm">
            <p className="text-xs text-blue-200/60 leading-relaxed">
              <strong className="text-blue-300">Tip:</strong> The output on the
              right is rendered directly from server-side generated ANSI codes.
              Use the code snippet below to reproduce it in your projects.
            </p>
          </div>
        </div>

        {/* Right Panel: Terminal & Code */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Terminal Window */}
          <div className="flex flex-col h-[400px]">
            <div className="bg-[#1e1e1e] rounded-t-xl border border-white/10 p-3 flex items-center justify-between shadow-2xl">
              <div className="flex gap-2 ml-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>
              </div>
              <div className="text-xs font-mono text-gray-500 flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
                server-log
              </div>
              <div className="w-10"></div> {/* Spacer for alignment */}
            </div>

            <div className="flex-1 bg-[#121212] overflow-hidden rounded-b-xl border-x border-b border-white/5 relative">
              <div className="absolute inset-0 overflow-auto custom-scrollbar p-6 font-mono text-sm">
                {loading && (
                  <div className="absolute top-4 right-4 text-xs text-blue-400 animate-pulse font-mono">
                    Processing...
                  </div>
                )}
                <AnsiDisplay output={output} />

                {output === "" && (
                  <div className="h-full flex flex-col items-center justify-center text-gray-700 space-y-4 select-none">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 opacity-20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p>Select a test suite to view output</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Code Snippet Viewer */}
          {output && (
            <div className="bg-[#111] border border-white/5 rounded-xl overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Example Code
                </span>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-gray-400 hover:text-white transition-colors border border-white/5"
                >
                  {copied ? (
                    <>
                      <svg
                        className="w-3.5 h-3.5 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                        />
                      </svg>
                      Copy Code
                    </>
                  )}
                </button>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-sm text-blue-300/90 leading-relaxed">
                  <code>{code}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

const ControlGroup = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <h3 className="text-xs uppercase tracking-wider font-bold text-gray-500 pl-1">
      {title}
    </h3>
    <div className="grid gap-2">{children}</div>
  </div>
);

const ActionBtn = ({
  onClick,
  children,
  color = "default",
}: {
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
}) => {
  const colorStyles: Record<string, string> = {
    default: "bg-white/5 hover:bg-white/10 text-gray-300 border-white/5",
    blue: "bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border-blue-500/20",
    red: "bg-red-500/10 hover:bg-red-500/20 text-red-300 border-red-500/20",
    green:
      "bg-green-500/10 hover:bg-green-500/20 text-green-300 border-green-500/20",
    yellow:
      "bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 border-yellow-500/20",
    purple:
      "bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border-purple-500/20",
    cyan: "bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border-cyan-500/20",
    pink: "bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border-pink-500/20",
    indigo:
      "bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border-indigo-500/20",
    orange:
      "bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 border-orange-500/20",
    teal: "bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border-teal-500/20",
    gradient:
      "bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 hover:from-pink-500/20 hover:to-indigo-500/20 text-white border-white/10",
  };

  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm font-medium ${colorStyles[color] || colorStyles.default} flex items-center justify-between group`}
    >
      {children}
      <svg
        className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity transform group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};
