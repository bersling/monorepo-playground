# Monorepo Playground

## Angular

This repo showcases some ideas how to build Angular monorepos.
The core ideas are the following:
- One package.json at the root of the repository. This installs a central version of angular. You can also override those packages by installing something directly in a project. For example, blub-project installs ng5.
- One tsconfig.json at the root of the repo. This declares the baseUrl and paths.

Advantages:
- Only update Angular once, works for all projects
- No complicated cycle like compile & reload & lerna. Just edit code and it has hot reloads.

Disadvantages:
- It becomes a mess to track which application actually uses which dependencies. But then again, let's say the day comes when you need to specify the dependencies more explicitly, then be it so and you can do it then...

