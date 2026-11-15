<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the first-load splash session-scoped with a fixed dismissal deadline and reduced-motion bypass so visitors cannot be trapped behind it.
- Lazy-load the intro's browser-only 3D scene after hydration and unmount it on dismissal so the main site retains SSR and no continuous GPU work.
