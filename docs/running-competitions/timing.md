# Tracking session timing

When a work order is generated, an estimated time for when each routine will be perform is calculated. This is shown in the "ETR" column (*Estimated Time of Routine*) in the work order PDFs.

You will also see when suggested times for a judges refresher/restroom break should occur.

As the competition coordinator you can use this information to keep track of your session's overall progress and know how early or late a session is running.

## Timing visibility for judges

When judges are using electronic score entry, a timing indicator will be shown on the score entry screen.

If a session is running more than a few minutes late, a timing warning be shown indicating how many minutes behind the session is. This will be visible to all judges as a way of encouraging them to work a little more efficiently.

Similarly, as soon as one judge has entered their scores for a routine, all other judges will see a a 20 second countdown timer on their submit button. If the countdown time expires, the button will change colour to orange to indicate they are running late.

### How Estimated Times are determined

Under the hood, here's what happens.

1. We start with the competition start time for the session. If no start time exists, we fall back to the general warmup time instead. If no times exist, we can't produce an estimated time.
2. We then determine the duration of a routine from the level definition, and add time for gymnasts to transition to/from the floor to determine when each routine should start.
    * Any scratched routines will be ignored.
3. The transition times are set at 60 seconds per routine when there are single panels in operation, and 45 seconds when judging panels are alternating (i.e. 2 panels, 1 floor)
4. Every 2 hours, we add a judges rest break.
5. We determine a suggested time for that break based on a few simple rules
    * If a rotation starts less than 15 minutes before the break, we bring the break forward to the before start of the rotation
    * If a rotation ends less than 25 minutes after the break, we delay the break until the end of the rotation
    * Otherwise we take the break mid-rotation

#### Considerations

It's common for the initial routines in a session to take a little longer as the judges find their rhythm and align their judging, and more so early in a competition season. While that time can often be caught up as the session progress, it can also be a pattern of behaviour.

We would encourage head judges to work with their panels to not fall more than 5 minutes behind.

We would also encourage competition coordinators to include some buffer time (10-15 minutes) in their session plans to allow for unexpected events such as injuries and excessive delays that can occur with split judging panels.