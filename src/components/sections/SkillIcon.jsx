import {
  SiC,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiReact,
} from 'react-icons/si';
import { FaCss3Alt, FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { HiCode, HiDatabase, HiCube } from 'react-icons/hi';

const iconMap = {
  c: SiC,
  java: FaJava,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: FaCss3Alt,
  react: SiReact,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
  code: HiCode,
  database: HiDatabase,
  oop: HiCube,
};

export default function SkillIcon({ name }) {
  const Icon = iconMap[name] ?? HiCode;
  return <Icon aria-hidden="true" />;
}
