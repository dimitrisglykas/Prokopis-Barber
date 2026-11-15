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

- Keep the haircut advisor's input/output validation and service catalog in a client-safe shared module so recommendations use the same prices as the page.
- Run AI Gateway inference only inside the public haircut-advisor server function; the visitor tool has no login or stored history, and returns validated recommendation DTOs.
