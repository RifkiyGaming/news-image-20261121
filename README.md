# The World — Saturday 21 November 2026

[![news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/RifkiyGaming/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/RifkiyGaming/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

Entry for the [make.fun bounty "Sum up 21 November's world news in one image"](https://make.fun/bounty/news-image-20261121) (competition `news-image-20261121`).

## The image

`entry.png` (1024×1024) is a newspaper front page — **"THE WORLD — SATURDAY 21 NOVEMBER 2026"** — drawn entirely from scratch with code (Python + PIL, no photos or copied artwork). It sums up the day in four illustrated stories plus two briefs:

1. **Missiles rain on Kyiv** — Russia's largest attack of the war so far: 400+ drones and 110 missiles fired at Ukraine overnight, at least eight people killed in Kyiv, and two missiles (plus a suspected drone) coming down in Poland, which Prime Minister Tusk called a deliberate provocation.
2. **AI sell-off sinks Wall Street** — US stocks fell 3.7% as an AI-sector rout pushed the S&P 500 and the Dow into correction territory and wiped out the Nasdaq's gains for 2026.
3. **6.8 quake shakes Peru** — a magnitude 6.8 tremor in the Junín region rattled Lima, 320 km away; no major damage was reported.
4. **COP31 talks run overtime** — the UN climate summit in Antalya, Turkey, ran past its deadline as nearly 200 nations failed to agree, deadlocked over fossil fuels.

Also today, in brief: the Saudi-led coalition intercepted Houthi missiles aimed at Riyadh for a third straight night, and a trial pill for pancreatic cancer (daraxonrasib) made tumours undetectable on scans in one in 12 patients.

## Sources

- Russia/Ukraine/Poland attack: BBC News, France 24, CBS News, El País (via One Turn's 21 Nov daily brief, https://oneturn.news/news/)
- AI sell-off / markets: Financial Times, The Guardian, BBC News (via the 21 Nov daily brief at https://michaelbrunger.com/briefs/2026-11-21/)
- Peru earthquake: Reuters (Lima, 20 Nov dateline; 7:09 pm local = 00:09 UTC 21 Nov), via The Hindu BusinessLine, https://www.thehindubusinessline.com/news/world/peru-hit-by-magnitude-68-earthquake-no-immediate-damage-reported/article71727426.ece
- COP31 overtime: One Turn, https://oneturn.news/news/
- Houthi missiles / Riyadh and pancreatic-cancer trial: One Turn, https://oneturn.news/news/

## How it was made

The image was drawn programmatically with Python (PIL): masthead, skyline, missile trails, chart, mountains, globe and all lettering are shapes and text rendered by code in the build session — no photographs, news-agency images, or other entries' artwork were used. `main.ts` (Node 22, standard library only) copies the committed `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`).

Local check:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
