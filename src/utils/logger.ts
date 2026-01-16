import chalk from "chalk";

export const logger = {
  info: (msg: string) => console.log(chalk.blue(msg)),
  success: (msg: string) => console.log(chalk.green(msg)),
  warn: (msg: string) => console.log(chalk.yellow(msg)),
  error: (msg: string) => console.log(chalk.red(msg)),
  general: (msg: string) => console.log(msg),
  footer: () => {
    console.log(chalk.gray("\n---"));
    console.log(chalk.gray("Built by Benjamin Onyia"));
    console.log(chalk.cyan("🌐 https://benjamin-onyia.vercel.app/"));
    console.log(chalk.cyan("💻 https://github.com/classicManCode"));
  },
};
