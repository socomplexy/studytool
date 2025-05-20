import { Box, List, ListItem, Typography } from "@mui/material";

export const PercentageChangeMnemonic = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography sx={{ mt: 2, mb: 4 }}>
        Mnemonics work differently for everyone, but I like to share mine
        because I try to combine something visual with something that gives me
        instructions at the same time. So how do I remember percentage change??
        With a toilet! I know that doesn't make any sense yet, but stick with
        me. First, a little visual...
      </Typography>
      <div className="percentage-change-loo" />
      <Typography sx={{ mt: 2 }}>
        If you remember from the equation on the info tab, we need help
        remembering what we do with the new value and what we do with the old
        value. Thinking of a toilet, we can do this by remembering:
      </Typography>
      <List>
        <ListItem>
          <strong>L</strong>: last/latest (new) value
        </ListItem>
        <ListItem>
          <strong>O</strong>: old value
        </ListItem>
        <ListItem>
          <strong>O</strong>: old value
        </ListItem>
      </List>
      <Typography sx={{ mt: 2, mb: 3 }}>
        So we have <strong>LOO</strong> - a toilet! Let try to fill in the
        blanks of the equation now.
      </Typography>
      <div className="percentage-change-empty" />
      <Typography sx={{ mb: 3 }}>
        There are 4 empty spaces: before the minus, after the minus, the thing
        we are dividing by, and the thing we are multiplying by. We can go
        through them by remembering <strong>LOO</strong>. But that's only 3
        letters - what about the thing we multiply by?! Well, it's LOO again,
        only lowercase this time (loo kinda looks like 100, doesn't it?)
      </Typography>
      <div className="percentage-change-filled" />
    </Box>
  );
};
