import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "云来",
  lastName: "程",
  name: "程云来",
  role: "独立开发者 / 开源实践者",
  avatar: "/images/avatar.jpg",
  email: "",
  location: "Asia/Shanghai",
  locationLabel: "中国 / 上海",
  languages: ["中文", "English"],
  locale: "zh-CN",
};

const newsletter: Newsletter = {
  display: false,
  title: <>订阅 {person.firstName} 的更新</>,
  description: <>分享开源项目、工程实践和正在学习的东西。</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Chengyunlai",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "首页",
  title: "程云来的个人站",
  description: "程云来的个人站，记录开源项目、工程实践与持续构建的东西。",
  headline: <>把想法，做成可以被使用的东西。</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">精选开源项目</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          立即查看
        </Text>
      </Row>
    ),
    href: "/work/cloud-platter",
  },
  subline: (
    <>
      我是程云来，一名独立开发者和开源实践者。<br />
      关注 AI Agent、开发者工具与有趣的桌面体验。
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "关于我",
  title: `关于 ${person.name}`,
  description: `认识 ${person.name}：${person.role}，来自中国。`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "自我介绍",
    description: (
      <>
        我喜欢把复杂的问题拆开，做成清晰、可靠、可持续演进的工具。
        目前主要探索 AI Agent、Kubernetes 运维体验、开发者工作流，以及 macOS 上的小而美的应用。
      </>
    ),
  },
  work: {
    display: false,
    title: "工作经历",
    experiences: [],
  },
  studies: {
    display: false,
    title: "学习经历",
    institutions: [],
  },
  technical: {
    display: true,
    title: "关注方向",
    skills: [
      {
        title: "AI Agent 工程",
        description: <>探索 Agent 的工具调用、工作流编排与长期可维护性。</>,
        tags: [{ name: "Python", icon: "python" }],
        images: [],
      },
      {
        title: "开发者工具",
        description: <>把复杂的运维和开发流程，做成更容易理解、更愿意使用的工具。</>,
        tags: [
          { name: "TypeScript", icon: "typescript" },
          { name: "Swift", icon: "swift" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "博客",
  title: "技术随笔",
  description: `阅读 ${person.name} 最近的记录。`,
};

const work: Work = {
  path: "/work",
  label: "开源项目",
  title: `开源项目 · ${person.name}`,
  description: `${person.name} 的开源项目与实验。`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "相册",
  title: `相册 · ${person.name}`,
  description: `${person.name} 的照片记录。`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
