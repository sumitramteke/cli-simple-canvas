# CLI Based simple canvas design
## Prerequisite
- Node setup with package manager (`npm` or `pnpm`) is required
- For quick `pnpm` setup, you can do `npm i -g pnpm`
## Setup
download dependency  
`npm install` or `pnpm install`
## Getting started
1. start program with `npm start` or `pnpm start`
2. select layout - currently with only one option viz. `canvas` - press `Enter`
3. provide width and height with space [eg] > `20 10`. Default value on press `Enter` will assign `20 10` as value. Resultant canvas will get printed
4. Immediate to that different options to perform will be shown

    | <div style="width:150px">Option</div> | Description |
    | ------------------------------------- | ---------- |
    | `line`                                | draw line |
    | `rectangle`                           | draw rectangle |
    | `bucketFill`                          | Bucket fill on given area |
    |  `x1 y1 x2 y2` | provide coordinates with space for `line` and `rectangle` |
    | `x y c` | provide coordinates for `bucketFill`. Argument `c` is optional character to print instead of default `o`  |
    | continue | To continue with further design. (default `Yes`)
5. On every select of action type following with given argument, resultant canvas will get printed.

### Note
- For `line` : either `x` or `y` coordinate has to be same as we support only straight line
- For `rectangle`: `x2 > x1` and `y2 > y1`

### Sample output

```
? select layout canvas
? Enter width and height with space(eg. 20 10) 20 10
----------------------
|                    |
|                    |
|                    |
|                    |
|                    |
|                    |
|                    |
|                    |
|                    |
|                    |
----------------------
? What to draw line
? Enter x1 y1 x2 y2 coordinate for straight line 1 1 5 1
----------------------
|xxxxx               |
|                    |
|                    |
|                    |
|                    |
|                    |
|                    |
|                    |
|                    |
|                    |
----------------------
? continue: Yes
? What to draw line
? Enter x1 y1 x2 y2 coordinate for straight line 15 4 15 9
----------------------
|xxxxx               |
|                    |
|                    |
|              x     |
|              x     |
|              x     |
|              x     |
|              x     |
|              x     |
|                    |
----------------------
? continue: Yes
? What to draw rectangle
? Enter x1 y1 x2 y2 coordinate for rectangle 2 3 10 8
----------------------
|xxxxx               |
|                    |
| xxxxxxxxx          |
| x       x    x     |
| x       x    x     |
| x       x    x     |
| x       x    x     |
| xxxxxxxxx    x     |
|              x     |
|                    |
----------------------
? continue: Yes
? What to draw bucketFill
? provide coordinate [x y] and character (optional) for bucketFill 2 6
----------------------
|xxxxx               |
|                    |
| ooooooooo          |
| o       o    x     |
| o       o    x     |
| o       o    x     |
| o       o    x     |
| ooooooooo    x     |
|              x     |
|                    |
----------------------
? continue: Yes
? What to draw bucketFill
? provide coordinate [x y] and character (optional) for bucketFill 1 6 u
----------------------
|xxxxxuuuuuuuuuuuuuuu|
|uuuuuuuuuuuuuuuuuuuu|
|uooooooooouuuuuuuuuu|
|uo       ouuuuxuuuuu|
|uo       ouuuuxuuuuu|
|uo       ouuuuxuuuuu|
|uo       ouuuuxuuuuu|
|uooooooooouuuuxuuuuu|
|uuuuuuuuuuuuuuxuuuuu|
|uuuuuuuuuuuuuuuuuuuu|
----------------------
? continue: No
```
