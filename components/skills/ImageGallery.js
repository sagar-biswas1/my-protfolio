import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
//import tileData from "./tileData";
//import bootstrap from "/bootstrap.png";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "80vw",
    height: 450,
  },
}));

const tileData = [
  {
    img: "/javascript.png",
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: "/react.png",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: "/bootstrap.png",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: "/nodepng.png",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: "/mongodb.png",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: "/tailwind.png",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: "/git.png",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: "/metarialui.png",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: "/next.png",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: "/express.png",
    title: "Image",
    author: "author",
    cols: 2,
  },
];

export default function ImageGridList() {
  const classes = useStyles();
  // console.log(bootstrap);
  return (
    <div className={`${classes.root} mt-5 mb-5 p-4`}>
      <GridList cellHeight={150} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} class="w-100 p-3" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
