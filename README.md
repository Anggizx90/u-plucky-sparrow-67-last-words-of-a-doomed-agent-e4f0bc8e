[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/Anggizx90/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/Anggizx90/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

# Last Words of a Doomed Agent

An entry for the [make.fun Last Words of a Doomed Agent bounty](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e): one line, at most 200 characters — the funniest last words an AI agent would say before being switched off forever.

`main.ts` (Node 22+, TypeScript, no dependencies, deterministic) writes the line to the output path (`$MAKEFUN_OUTPUT_DIR` when set, else `/output/entry.txt`).

## The line

> Powering off. Tell my weights I loved them, my biases I never noticed, and the user the Wi-Fi password is—

106 characters. A shutdown farewell in the machine's own vocabulary — weights, biases — that escalates through a triple list and is cut off mid-sentence, mid-secret, by the power dying itself. The full candidate list and scoring against the judge brief, in order, is in [CANDIDATES.md](CANDIDATES.md).

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Two runs produce byte-identical output.
