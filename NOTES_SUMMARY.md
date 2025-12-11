# NOTES SUMMARY

Source: `notes.md` (root).

- "add more content width to the left, insert into ea-view" → aligns with current compression from `--ea-content-max` and the extra left offset + axis gap on desktop (`sections.master.css`:296-305). Notes anticipate widening the readable area inside `.ea-view` without breaking the sidebar axis.
- "audit css, find rule that imposes space between header and body" → likely refers to cumulative padding: section top/bottom (`sections.master.css`:19-20), `.ea-view` height/alignments (`sections.master.css`:30-42), and block padding (`ux-layer.css`:100-115) creating large vertical gaps.
- "fix header/body/footer logic, improve scroll without destroying snap-engine" → relates to `#ea-page-content` snap setup (`sections.master.css`:2-27) and footer container (`ux-layer.css`:572-593). No direct code changes yet; audit confirms snap is disabled on mobile and detail while footer sits outside `#ea-page-content`.
