import React from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';

import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StartButton from './StartButton';

function Top() {
  return (
    <div className="container">
      <h1>
        SF診断
      </h1>
      <p>v 1.0.0 版</p>

      <div className="explanation">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              variant="string"
              component="div"
              style={{ fontSize: '18px' }}
            >
              <div>
                SF診断
                <br />
                <br />
                SF診断
                <br />
                <br />
                全6問
                <br />
                所用時間1分
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="startButton">
        <StartButton />
      </div>
    </div>
  );
}

export default Top;
