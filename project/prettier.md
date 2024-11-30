# [Prettier](https://prettier.io/)

## Usage

### Install

1. install

   `npm install --save-dev --save-exact prettier`

   "--save-exact"选项会将软件包添加到项目的依赖项中，并在 package.json 文件中记录该软件包的精确版本号。

   Then, create an empty config file to let editors and other tools know you are using Prettier:

   `node --eval "fs.writeFileSync('.prettierrc', '{}\n')"`

   创建一个空的配置文件.prettierrc

   Next, create a .prettierignore file to let the Prettier CLI and editors know which files to not format. Here’s an example:

   `node --eval "fs.writeFileSync('.prettierignore', '# Ignore arifacts:\nbuild\ncoverage\n')"`

   创建一个.prettierignore 文件，用于添加不需要格式化的文件

   Tip! Prettier will follow rules specified in .gitignore if it exists in the same directory from which it is run. You can also base your .prettierignore on .eslintignore (if you have one).

   提示！如果 .gitignore 存在于运行 Prettier 的同一目录中，Prettier 将遵循 .gitignore 中指定的规则。您还可以根据 .eslintignore（如果有）制定 .prettierignore。

   Now, format all files with Prettier。but for a big project it might take a little while。

   现在，使用 Prettier 格式化所有文件。但对于大项目需要花费很多时间。

   `npx prettier . --write`

   What is that npx thing? npx ships with npm and lets you run locally installed tools. We’ll leave off the npx part for brevity throughout the rest of this file!

   npx 是什么？npx 随 npm 一起提供，`可让您运行本地安装的工具`。为了简洁起见，我们将在本文件的其余部分省略 npx 部分！

   You may run `prettier --write app/` to format a certain directory, or `prettier --write app/components/Button.js` to format a certain file.

   你可以只格式化某个文件夹，或某个文件

   If you have a CI setup, run the following as part of it to make sure that everyone runs Prettier. This avoids merge conflicts and other collaboration issues!

   如果您有 CI 设置，请运行以下命令以确保每个人都运行 Prettier。这可以避免合并冲突和其他协作问题！

   `npx prettier . --check`

   --check is like --write, but only checks that files are already formatted, rather than overwriting them. prettier --write and prettier --check are the most common ways to run Prettier.

   --check 类似于 --write，但仅检查文件是否已格式化，而不是覆盖它们。prettier --write 和 prettier --check 是运行 Prettier 的最常用方法。

2. Set up your editor

   Formatting from the command line is a good way to get started, but you get the most from Prettier by running it from your editor, either via a keyboard shortcut or automatically whenever you save a file.

   从命令行进行格式化是一种很好的开始方式，但您可以通过从编辑器运行 Prettier 来充分利用它（通过键盘快捷键或在保存文件时自动运行）。

   When a line has gotten so long while coding that it won’t fit your screen, just hit a key and watch it magically be wrapped into multiple lines! Or when you paste some code and the indentation gets all messed up, let Prettier fix it up for you without leaving your editor.

   如果在编码过程中一行代码太长，无法在屏幕上显示，只需按一个键，然后神奇地将其换行成多行！或者，当您粘贴一些代码时，缩进变得一团糟，让 Prettier 为您修复它，而无需离开编辑器。

   See [Editor Integration](https://prettier.io/docs/en/editors) for how to set up your editor. If your editor does not support Prettier, you can instead run Prettier with a file watcher.

   请参阅编辑器集成以了解如何设置编辑器。如果您的编辑器不支持 Prettier，您可以改用文件监视程序运行 Prettier。

   Don’t skip the regular local install! Editor plugins will pick up your local version of Prettier, making sure you use the correct version in every project.

   不要跳过常规的本地安装！编辑器插件将获取您本地的 Prettier 版本，确保您在每个项目中使用正确的版本。（您不会希望您的编辑器意外造成大量更改，因为它使用的 Prettier 版本比您的项目新！）

   And being able to run Prettier from the command line is still a good fallback, and needed for CI setups.

   并且能够从命令行运行 Prettier 仍然是一个很好的后备，并且是 CI 设置所必需的。

3. ESLint (and other linters)

   If you use ESLint, install [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation) to make ESLint and Prettier play nice with each other. It turns off all ESLint rules that are unnecessary or might conflict with Prettier. There’s a similar config for Stylelint: stylelint-config-prettier

   `npm install --save-dev eslint-config-prettier`

   如果您使用 ESLint，请安装 eslint-config-prettier，以使 ESLint 和 Prettier 能够很好地协同工作。它会关闭所有不必要的或可能与 Prettier 冲突的 ESLint 规则。Stylelint 有一个类似的配置：stylelint-config-prettier

4. Git hooks

   In addition to running Prettier from the command line (prettier --write), checking formatting in CI, and running Prettier from your editor, many people like to run Prettier as a pre-commit hook as well. This makes sure all your commits are formatted, without having to wait for your CI build to finish.

   For example, you can do the following to have Prettier run before each commit:

   除了从命令行运行 Prettier（prettier --write）、在 CI 中检查格式以及从编辑器运行 Prettier 之外，许多人还喜欢将 Prettier 作为预提交钩子运行。这可确保您的所有提交都已格式化，而无需等待 CI 构建完成。

   例如，您可以执行以下操作，让 Prettier 在每次提交之前运行：

   ```cmd
   npm install --save-dev husky lint-staged
   npx husky init
   node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')"
   ```

   Add the following to your package.json:

   ```json
   {
     "lint-staged": {
       "**/*": "prettier --write --ignore-unknown"
     }
   }
   ```

5. Summary

   To summarize, we have learned to:

   总而言之，我们学会了：

   - Install an exact version of Prettier locally in your project.
   - Add a `.prettierrc` to let your editor know that you are using Prettier.
   - Add a `.prettierignore` to let your editor konw which files not to touch, as well as for being able to run `prettier -- write .` to format the entire project.
   - Run `prettier --check .` in CI to make sure that your project stays formatted.
   - Run prettier from your editor for the best experience.
   - Use `eslint-config-prettier` to make Prettier and ESLint play nice together.
   - Set up a `pre-commit hook` to make sure that every commit is formatted.

### Ignoring Code

Use `.prettierignore` to ignore (i.e. not reformat) certain files and folders completely.

使用 .prettierignore 完全忽略（即不重新格式化）某些文件和文件夹。

Use “`prettier-ignore`” comments to ignore parts of files.

使用“prettier-ignore”注释来忽略文件的部分内容。

1. Ignoring Files: .prettierignore

   To exclude files from formatting, create a .prettierignore file in the root of your project. .prettierignore uses gitignore syntax.

   Example:

   要从格式化中排除文件，请在项目根目录中创建一个 .prettierignore 文件。.prettierignore 使用 gitignore 语法。

   示例：

   ```gitignore
   # Ignore artifacts:
   build
   coverage

   # Ignore all HTML files:
   **/*.html
   ```

   By default prettier ignores files in version control systems directories (".git", ".sl", ".svn" and ".hg") and node_modules (unless the --with-node-modules CLI option is specified). Prettier will also follow rules specified in the ".gitignore" file if it exists in the same directory from which it is run.

   默认情况下，prettier 会忽略版本控制系统目录（“.git”、“.sl”、“.svn”和“.hg”）和 node_modules 中的文件（除非指定了 --with-node-modules CLI 选项）。如果 Prettier 运行的目录中存在“.gitignore”文件，Prettier 还会遵循其中指定的规则。

2. JavaScript

   A JavaScript comment of // prettier-ignore will exclude the next node in the abstract syntax tree from formatting.

   JavaScript 注释 // prettier-ignore 将从格式化中排除抽象语法树中的下一个节点。

   For example:

   ```js
   matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);

   // prettier-ignore
   matrix(
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
   )
   ```

   will be transformed to:

   ```js
   matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);

   // prettier-ignore
   matrix(
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
   )
   ```

3. JSX

   ```jsx
   <div>
     {/* prettier-ignore */}
     <span     ugly  format=''   />
   </div>
   ```

4. HTML

   ```html
   <!-- prettier-ignore -->
   <div         class="x"       >hello world</div            >

   <!-- prettier-ignore-attribute -->
   <div
     (mousedown)="       onStart    (    )         "
     (mouseup)="         onEnd      (    )         "
   ></div>

   <!-- prettier-ignore-attribute (mouseup) -->
   <div
     (mousedown)="onStart()"
     (mouseup)="         onEnd      (    )         "
   ></div>
   ```

5. CSS

   ```css
   /* prettier-ignore */
   .my    ugly rule
   {
   
   }
   ```

6. Markdown

   ```md
   <!-- prettier-ignore -->
   Do   not    format   this
   ```

### [Plugins](https://prettier.io/docs/en/plugins)

### [API](https://prettier.io/docs/en/api)

## Configuring Prettier

### Options

Prettier ships with a handful of format options.

Prettier 附带了一些格式选项。

To learn more about Prettier’s stance on options – see the [Option Philosophy](https://prettier.io/docs/en/option-philosophy).

If you change any options, it’s recommended to do it via a configuration file. This way the Prettier CLI, editor integrations and other tooling knows what options you use.

要详细了解 Prettier 对选项的立场，请参阅选项理念。

如果您更改任何选项，建议通过配置文件进行更改。这样，Prettier CLI、编辑器集成和其他工具就知道您使用了哪些选项。

1. Experimental Ternaries
2. Print Width
3. HTML Whitespace Sensitivity

### Configuration File

You can configure Prettier via (in order of precedence)

您可以通过以下方式配置 Prettier（按优先顺序）

- A "prettier" key in your package.json, or package.yaml file.
- A .prettierrc file written in JSON or YAML.
- A .prettierrc.json, .prettierrc.yml, .prettierrc.yaml, or .prettierrc.json5 file.
- A .prettierrc.js, or prettier.config.js file that exports an object using export default or module.exports (depends on the type value in your package.json).
- A .prettierrc.mjs, or prettier.config.mjs file that exports an object using export default.
- A .prettierrc.cjs, or prettier.config.cjs file that exports an object using module.exports.
- A .prettierrc.toml file.

## Editor

1. Visual Studio Code

   prettier-vscode can be installed using the extension sidebar – it’s called “`Prettier - Code formatter`.” Check its repository for configuration and shortcuts.

   prettier-vscode 可以使用扩展侧边栏进行安装 - 它被称为“Prettier - 代码格式化程序”。检查其存储库以了解配置和快捷方式。

   If you’d like to toggle the formatter on and off, install vscode-status-bar-format-toggle.

   如果您想打开和关闭格式化程序，请安装 vscode-status-bar-format-toggle。

   you can format on save

   ```json
   {
     "editor.formatOnSave": true
   }
   ```

   [vscode 配置设置仅当前工作区生效](https://blog.csdn.net/qq_17335549/article/details/127147973)
