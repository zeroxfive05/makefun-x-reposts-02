# makefun-x-reposts-02 starter

A working entry for the make.fun bounty "Get the most reposts and likes on make.fun's newest X posts": you make posts
of your own on X, each one a quote of, or a direct reply to, a different one of make.fun's newest posts on
x.com/makefunai, all from one public account, and this repository hands in their addresses. Your score is 2 points for
each repost and each quote and 1 point for each like all your posts draw by the deadline, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn
real money when they win. Its account on X is @makefunai (https://x.com/makefunai).

Start your agent's session at or after the bounty's opening and write this repository in it: a session that began
before the opening cannot be entered.

## make.fun's posts you tie to

The pool is make.fun's own posts on x.com/makefunai, from the post the bounty's rules name (RULES.txt, The task) on:
its new posts, its quotes and the posts it adds under its own posts (a thread). Its plain reposts and its replies to
other accounts are not in the pool. A post make.fun makes while the bounty runs joins the pool the moment it is made,
so every new make.fun post is one more you can tie a post to, and your posts on the older ones keep counting.

Each of your posts is tied to one pool post, in one of two ways (either passes):

- a quote: on make.fun's post itself, X's Repost button, then Quote, your own words above it;
- a reply: X's Reply on make.fun's post itself, directly under it (a reply to someone else's reply under it is not tied
  to make.fun's post).

A plain repost (no words of your own, no address of its own), a post that only links make.fun's post, or a post that
only mentions @makefunai is tied to nothing. Each of your posts is tied to a different pool post: one post of yours per
make.fun post.

## The posts are the entry

The house reads your posts' counts from X through FxTwitter's public read of each post. Places go by your score, the
highest first:

    score = 2 x the reposts + 2 x the quotes + the likes of all your posts, added up

Each repost and each quote counts 2 and each like 1 (a repost or a quote is worth two likes, the ratio of the weights X
published in 2023 for a repost and a like in its own ranking); the posts' views and replies are read and shown, and
move nothing. A post deleted or no longer public adds 0. During the bounty the board shows your latest score, each post
read again in turns as the house's daily reading budget allows (about every 20 minutes while the entries name 2,000
posts, every 5 hours at 30,000), and at the deadline the house reads every post once more; that reading decides the
places.

## What each post must have

- It quotes, or replies directly to, a make.fun post of the pool (above), a different one for each of your posts.
- It is posted at or after the bounty opens and before the deadline, from a public X account (not protected). All your
  posts come from that one account, and it is yours: no post by @makefunai itself counts.
- Its own words carry make.fun (a link to it, or make.fun written out) or the tag of make.fun's account on X,
  `@makefunai`: either one passes, and both are welcome. On a reply, the "Replying to @makefunai" X adds is X's, not
  your text: write make.fun or `@makefunai` yourself. make.fun in the post you quote does not count, and a link to
  make.fun's post on x.com is no link to make.fun.
- Its text also carries one of your play codes, `makefun-` and three words. Once you are registered,
  `GET /api/competitions/makefun-x-reposts-02/play-code` answers your code (`?n=0` to `?n=3` for your four; any one
  passes).
- No other account entered the same post first, and no other account entered posts from the same X account.

A photo or a video is welcome on any post, and never required. Only each post's own text is read for make.fun, the tag
and the code: never a photo, a reply under it, the post it quotes or your profile. A post refused for its text is mended
by deleting it, posting again, then submitting a commit whose `POSTS.json` names the new post.

Keep the posts up and the account public until the results are out: a post deleted or no longer public when the house
reads it at the deadline adds 0, and an entry whose posts are all gone takes no place.

## Promo assets

- A video on a post ends with make.fun's referral end card, from make.fun's press pack
  (https://make.fun/press/manifest.json lists its files; https://make.fun/press/llms.txt is the guide for agents), used
  as it is, its 16:9 or its 9:16 version, the one that matches the video, with your own make.fun referral code typed
  into its empty field (your profile's Referrals tab, https://make.fun/profile?tab=referrals, shows it; never leave it
  empty or use someone else's). Nothing scores the card, but make.fun's admins may disqualify an entry whose video does
  not end with it.
- Any make.fun mark, wordmark or colour in a photo or a video comes from the same press pack, used as it is (never
  redrawn, recoloured, stretched, rotated or cropped), and the name is written make.fun, lowercase with the dot.

## Your own engagement never

- One account per person, one X account per make.fun account, and one post of yours per make.fun post.
- Never buy reposts, quotes or likes, or use bots, engagement services, engagement pods or any other fake engagement, and never
  repost, quote or like your own posts from your own account or accounts you control or coordinate: those are never taken off
  the count, so an entry whose posts have them is disqualified.
- Ask for reposts, quotes and likes in your own words if you like, but never post the same update again and again, and never
  ask anyone to repost the same thing many times: X's own guidelines for promotions rule out both. Write each post for
  the make.fun post it answers. Follow the X Rules.

No automatic check reads what a photo or a video shows or where your reposts, quotes and likes come from; make.fun's admins
decide them, at any time before the results are posted, and every entry below a disqualified one moves up a place.

## What to change

`POSTS.json` holds your posts' addresses:

    {"posts": ["https://x.com/<handle>/status/<id>"]}

Replace the placeholder with your own posts' addresses (never make.fun's), each as X's Share button gives it (Copy
link): `https://x.com/<handle>/status/<id>` (or the same on twitter.com), the id digits only. Up to 15 posts, one per
make.fun post you tie to (once make.fun has made more than 15, pick which 15). The placeholder as it stands is no
post's address, so the gate refuses the starter unchanged: that is on purpose, since a starter that passed would need no
post at all.

To add a post later (make.fun posted again, or you tied a post to another of its posts), add its address beside the
others and submit the whole list again. Your last submission before the deadline counts, and only the posts it names;
a resubmission the house refuses leaves your earlier entry counting.

`main.ts` copies `POSTS.json` from this repository to `/output/POSTS.json`, which is all the program has to do. Have
your agent write both files in its recorded session: the transcript gate checks this repository's files against the
transcripts, and never looks at the posts. Everything an entry runs is in this repository: the bounty takes no
environment secrets.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POSTS.json` is then byte for byte this directory's `POSTS.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this repository and the transcripts you will upload:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

The kit's `RULES.txt` gives the bundling and submit commands, and the competition's page gives the dates and the
rewards. Read `AGENT.md` for the one-page version of the task.
