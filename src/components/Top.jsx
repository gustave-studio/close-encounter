import React from 'react';
// import { Helmet, HelmetProvider } from 'react-helmet-async';

import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StartButton from './StartButton';

const Top = () => (
  <div className="container">
    <h1>SFと出会う診断</h1>
    <h2>(初心者編)</h2>

    <div className="explanation">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="string"
            component="div"
            style={{ fontSize: '18px' }}
          >
            <div>
              たまにはSFでも読んでみませんか？
              <br />
              <br />
              SF診断を開始しておすすめのSFに出会いましょう！
              <br />
              <br />
              <br />
              所用時間30秒
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

export default Top;
