# Entries

The entry list for the competition is where you define all the gymnasts or groups that will be competing.

Entries are a list of gymnasts/groups by club, per level.

If a level does not have [pre-set music](../administration/levels#apparatus), each entry may optionally have a music track associated with each exercise/apparatus to be performed.

## Managing entries
The first step when editing entries is to select the club the entry belongs to. Typically, clubs supply entry lists, so selecting the club first should make it somewhat simpler to record the entries.

In the Clubs listing, any clubs with existing entries are listed first, along with their entry count. All other clubs & organisations are shown after that in alphabetical order.

![club selection](./images/entries/entry-club-selection.png)

Once you've selected a club, you'll see all the available levels for the competition listed, along with a summary of the entries per level.

Selecting a level expands the view to show the entry list for that club and level. If a competition also allows team entries, a tab to manage team entries will be shown alongside the individual entries.

![entry level details](./images/entries/entry-level-details.png)

If you remove a gymnast from the entry list, any team's they are a part of will also be removed.

::: tip AutoSave Enabled
Any changes made will be automatically saved as soon as you make them. You do not need to click a  `save` button. You do not need to worry about losing changes due to a temporary loss of connectivity whilst recording a large number of entries.
:::

The ticks you see indicate if an entry has been accepted or not. This is in preparation for a potential future update where support may be added for club owners to self-manage their entries so that competition organisers just have to accept or decline entries before each competition starts.

Once done, you can either select another club to add entries for, or you can click the back button at the top of the entry card.

## Timing Estimates

When you have added entries, you will see a summary of the entry count per level. This can be useful when trying to determine which levels should compete in which session.

Additionally, you will see an estimate under each level with an approximation for how much time will be needed for each level to compete.

The time for a single panel is based on a 60 second gap between each routine, allowing enough time for judges to finalise scores and for the next gymnast to enter the floor and be set.

The time for two panels judging alternate routines on the same floor (an "A/B" configuration) is based on a 45 second gap.

The actual time a session requires may differ from this rough estimate for a number of reasons. in particular uneven panel sizes when multiple levels compete, and longer sessions having inbuilt refresher breaks for judges.

## How to add a late entry

To add a late entry, go to the session details via the administration area. You should see the new Late Entry button in each level's summary view.

![Late Entry](./images/entries/late-entry.png)

Click the button, fill in the details, click on Add, and a new entry will be added to the competition and new routines will be added to your session.

### Where do routines get placed?

When placing the routines for late entries, RGScores aim to preserve the existing work order as much as possible.

For sessions with a **single judging panel**, routines will be added at the end of the rotation.

When there are **multiple judging panels and one competition floor**, routines for late entries will be inserted into a gap in a judging panel if one exists. Failing that, they'll be added at the end of the rotation.

Similarly, for sessions with **multiple competition floors in parallel**, routines are placed in any gaps on judging panels that may exist, and added at the end of the rotation if that is not possible.

This means that work order generation options such as grouping gymnasts from the same club together, starting routines on different panels per rotation, or keeping all routines in a level together are ignored. Since it's a late entry, and probably occurring during warm up, the primary goal is to allow the gymnast to compete, and to not disadvantage any other gymnast's preparations.

If you do add a late entry you will need to refresh any pages where the session's work order is being displayed. This means refreshing the score entry, judging, scoreboard, and floor marshal pages.

Routine mustic for late entries must be handled manually.