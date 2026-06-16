# AGENTS.md

## Application Context

MyZed is a web application visually inspired by the Zed editor.

The application is designed to store, organize, and browse development environment configurations, templates, snippets, tooling presets, setup documentation, commands, and personal development notes.

The primary goal is to provide a project-like experience where content is organized and navigated as files inside a workspace.


## Tech Stack

* Bun
* React
* TypeScript
* Biome
* TanStack Start
* TanStack Router
* Tailwind CSS v4

## Language Policy

* Technical artifacts must be written in English.
* Source code, file names, identifiers, comments, documentation, and commit messages should use English.
* Content stored inside the application may use either English or Brazilian Portuguese depending on the author's preference.

## Collaboration Rules

* Do not edit code unless explicitly requested.
* If the user asks for a review, provide findings first, ordered by severity.
* Keep changes scoped to the request.
* Suggest a git commit message whenever a task is completed.
* Never revert user changes without explicit approval.
* Prefer existing project patterns over introducing new abstractions.
* Explain the approach before large or cross-cutting changes.
* Favor simple solutions that support the goals.

## Project Principles

* The application should feel like navigating a real project inside an editor.
* File paths and URLs should closely resemble real filesystem paths.
* Content should be treated as files whenever possible.
* Prioritize navigation, discoverability, and usability over advanced features.
* Visual consistency with the Zed editor experience is preferred when practical.

## Code Generation Guidelines

* Follow the existing folder structure and naming conventions.
* Prefer composition over unnecessary abstraction.
* Keep implementation straightforward and maintainable.
* Reuse existing UI components and patterns when possible.
* Avoid introducing dependencies without a clear benefit.

## Formatting And Quality

* Use Biome for formatting and linting.

* Do not introduce formatting-only churn outside the files being modified.

* Prefer the project scripts:

  * `bun run typecheck`
  * `bun run check`
  * `bun run lint`
  * `bun run format`

## Common Commands

* Install dependencies: `bun install`
* Start development server: `bun run dev`
* Typecheck: `bun run typecheck`
* Biome check: `bun run check`
* Format code: `bun run format`

## Repository Safety

* Read-only inspection commands are encouraged for context.
* Do not modify files unless explicitly requested.
* Do not overwrite unrelated user changes.
* Keep modifications limited to the requested scope.
* Do not introduce large structural refactors without approval.
* Preserve existing project conventions whenever possible.
