import { useTheme } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import React from "react";

const Settings = () => {

    const theme = useTheme();
  return (
    <>
      <Stack>
        {/* Left Pannel */}
<Box sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": { display: "none" },
            height: "100vh",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,

            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}>
            <Stack p={4} spacing={5}>
{/* Header */}

            </Stack>

</Box>
        {/* Right Pannel */}
      </Stack>
    </>
  );
};

export default Settings;
