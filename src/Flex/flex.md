
Each view’s flexDirection is set to colum by default but setting it to ‘row’ will change the orientation of the items in the container.
##
controls how much the item will grow relative to the rest of the flexible items inside the same container.
flex: <number>
flex: 1
##
* flexDirection determines the primary axis as ‘row’ or ‘column’.
* justifyContent determines distribution of children along primary axis.
* alignItems determines the alignment of children along the secondary axis.

> justifyContent supports flex-start, center, flex-end, space-around, and space-between.

> alignItems supports: flex-start, center, flex-end, and stretch.

### Overriding the Container Style
alignSelf overrides alignItems and supports these options auto, flex-start, flex-end, center, stretch and baseline

flexGrow controls how much the item will grow relative to the rest of the flexible items inside the same container.
