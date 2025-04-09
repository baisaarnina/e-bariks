import { Box, Typography } from '@mui/material';
import StatueSrc from '../assets/image/image_statue.png';

export default function Proseso() {
  return (
    <Box sx={{ px: 4 }}>
      <Typography variant="h4" color="initial" gutterBottom>
        PROSESO NG PAGBABARIKS
      </Typography>

      <Box sx={{ position: 'relative', width: 700, height: 520 }}>
        <Box
          sx={{
            height: '100%',
            bgcolor: '#1a1a1a',
            borderRadius: 5,
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 25,
            left: 25,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: 5,
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src={StatueSrc}
            alt="Vinzons Town Hall"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
