import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, linkItems } from '@/lib/layout.shared';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import Link from 'fumadocs-core/link';
import Image from 'next/image';
import Preview from '@/public/banner.png';
import { Book, ComponentIcon, Pencil, PlusIcon, Server } from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout
      {...baseOptions()}
      style={
        {
          '--spacing-fd-container': '1120px',
        } as object
      }
      links={[
        {
          type: 'menu',
          on: 'menu',
          text: '文档笔记',
          items: [
            {
              text: '指南',
              url: '/docs/sudynotes',
              icon: <Book />,
            },
            {
              text: '博客',
              url: '/blog',
              icon: <ComponentIcon />,
            },
          ],
        },
        {
          type: 'custom',
          on: 'nav',
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/docs/sudynotes">指南</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent className="text-[15px]">
                <NavbarMenuLink
                  href="/docs/sudynotes"
                  className="md:row-span-2"
                >
                  <div className="-mx-3 -mt-3">
                    <Image
                      src={Preview}
                      alt="Perview"
                      className="rounded-t-lg object-cover"
                      style={{
                        maskImage:
                          'linear-gradient(to bottom,white 60%,transparent)',
                      }}
                    />
                  </div>
                  <p className="font-medium">立刻开始</p>
                  <p className="text-fd-muted-foreground text-sm">
                    这里是我个人的学习笔记和知识库，记录了我在学习和工作中积累的各种知识和经验。希望这些内容能对你有所帮助，也欢迎你与我交流和分享你的见解。
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/sudynotes/python"
                  className="lg:col-start-2"
                >
                  <ComponentIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Python</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Python是一种简单易学、功能强大且语法优雅的编程语言，广泛应用于数据分析、人工智能、网站开发、自动化等多个领域，适合初学者和专业开发者。
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/sudynotes/linux"
                  className="lg:col-start-2"
                >
                  <Server className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Linux</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Linux是一种开源的操作系统，基于Unix内核，广泛应用于服务器、嵌入式设备和开发环境中。
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/sudynotes/markdown"
                  className="lg:col-start-3 lg:row-start-1"
                >
                  <Pencil className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Markdown</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Markdown是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/sudynotes/git"
                  className="lg:col-start-3 lg:row-start-2"
                >
                  <PlusIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Git</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Git是一种分布式版本控制系统，广泛用于软件开发和版本管理。它允许多个开发者协同工作，跟踪代码变更历史。
                  </p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        ...linkItems,
      ]}
      className="dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)]"
    >
      {children}
      <Footer />
    </HomeLayout>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold">NextDocs</p>
          <p className="text-xs">
            Built with ❤️ by{' '}
            <a
              href="https://github.com/Lewis-Lian"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium"
            >
              Lewis
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
