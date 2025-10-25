/*@jsxRuntime automatic*/
/*@jsxImportSource react*/
function _createMdxContent(props) {
  const _components = {
    code: "code",
    pre: "pre",
    ...props.components
  }, {CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger} = _components;
  if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
  if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
  if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
  if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
  return <CodeBlockTabs defaultValue="ts"><CodeBlockTabsList><CodeBlockTabsTrigger value="ts">{"TypeScript"}</CodeBlockTabsTrigger><CodeBlockTabsTrigger value="js">{"JavaScript"}</CodeBlockTabsTrigger></CodeBlockTabsList><CodeBlockTab value="ts"><_components.pre><_components.code className="language-tsx">{"import { ReactNode } from 'react';\r\n\r\nexport default function Layout({ children }: { children: ReactNode }) {\r\n  const v: string = 'hello world' as any;\r\n\r\n  return (\r\n    <div>\r\n      {children} {v}\r\n    </div>\r\n  );\r\n}\n"}</_components.code></_components.pre></CodeBlockTab><CodeBlockTab value="js"><_components.pre><_components.code className="language-jsx">{"export default function Layout({ children }) {\n\tconst v = \"hello world\";\n\treturn <div>\r\n      {children} {v}\r\n    </div>;\n}\n\n"}</_components.code></_components.pre></CodeBlockTab></CodeBlockTabs>;
}
export default function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
