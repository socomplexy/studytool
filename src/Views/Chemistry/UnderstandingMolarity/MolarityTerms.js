import { Box, Typography } from "@mui/material";

export const MolarityTerms = () => {
  const titleProps = {
    variant: "h6",
    sx: { color: "secondary.main", mt: 4, fontWeight: 600 },
  };
  const subtitleProps = {
    variant: "subtitle2",
    sx: { color: "text.secondary", mt: 0.5, mb: 1 },
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Key Terms
      </Typography>
      <Typography>
        Before learning the calculation, we need to learn what each of the
        variables means.
      </Typography>

      <Typography {...titleProps}>C = (C)oncentration (Molarity)</Typography>
      <Typography {...subtitleProps}>
        UNITS: M or moles per liter (mol/L)
      </Typography>
      <Typography>
        Molarity is the number of moles of solute in one litre of solution. A
        solution with a molarity of 1.0 M contains 1.0 mole of solute for every
        1.0 liter of solution. For example, if you have 1 mole of solute in 250
        l (or 0.25 L) solution, you have a molarity of 4.0 M.
      </Typography>

      <Typography {...titleProps}>Formula Mass</Typography>
      <Typography {...subtitleProps}>
        UNITS: atomic mass unit (amu) or unified mass (um)
      </Typography>
      <Typography>
        This is the combined weight of each atom in a molecule, which can be
        worked out by looking up the atomic weight for each part. For example,
        the atomic weight of hydrogen is 1, and the atomic weight of oxygen is
        16. To figure out the formula mass for H<sub>2</sub>O, we would add up
        their weights. There are 2 hydrogen atoms in H<sub>2</sub>O, so we
        multiply 2 x 1, then add the 2 (hydrogen) and 16 (oxygen) to get the
        Formula Mass of 18.
      </Typography>

      <Typography {...titleProps}>GFM = (G)ram (F)ormula (M)ass</Typography>
      <Typography {...subtitleProps}>UNITS: grams (g)</Typography>
      <Typography>
        This is the same as the Formula Mass, but in grams. As illustrated
        above, the Formula Mass for H<sub>2</sub>O is 18, which means its Gram
        Formula Mass is 18 g.
      </Typography>

      <Typography {...titleProps}>m = (m)ass</Typography>
      <Typography {...subtitleProps}>UNITS: grams (g)</Typography>
      <Typography>
        This is the mass (or weight) of substance (solute) in a solution.
      </Typography>

      <Typography {...titleProps}>n = (n)umber of moles</Typography>
      <Typography {...subtitleProps}>UNITS: moles</Typography>
      <Typography>
        A mole is the amount of a substance that is numerically equal to its
        molecular weight. The number of molecules in one mole (known as
        Avogadro's number), which is 6.02 x 10<sup>23</sup>. Using NaOH as an
        example, which has Formula Mass (or molecular weight) of 40, there are
        1.88 moles in 75 g of NaOH.
      </Typography>

      <Typography {...titleProps}>V = (V)olume</Typography>
      <Typography {...subtitleProps}>
        UNITS: L, mL, cm<sup>3</sup>
      </Typography>
      <Typography>
        This is the volume of solution being used. This should{" "}
        <em>
          <strong>always</strong>
        </em>{" "}
        be converted to litres when used in calculations.
      </Typography>
    </Box>
  );
};
