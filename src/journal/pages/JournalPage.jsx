import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant="p">
        Ipsum dolor ipsum irure duis duis do veniam esse. Non esse proident
        voluptate quis eu adipisicing sunt esse minim ullamco officia eiusmod
        voluptate eiusmod. Id fugiat aute ut consequat in. Eu pariatur irure
        exercitation sint.
      </Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
        
      </IconButton>
    </JournalLayout>
  );
};
