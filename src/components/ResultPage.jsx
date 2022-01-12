import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Results from '../Results';

const ResultPage = (props) => {
  const navigate = useNavigate();
  const [toTop, setToTop] = useState(false);

  const { result, setQuestionNumber } = props;
  const texts = Results[result].containts.split('\n').map((item) => (
    <div key={item}>
      {item}
    </div>
  ));

  const advertisement = () => {
    switch (result) {
      case 'result1':
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4122022878">
              <p>「残像に口紅を」をAmazonで見る</p>
            </a>
          </div>
        );
      case 'result2':
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4040721578">
              <p>横浜駅SFをAmazonで見る</p>
            </a>
          </div>
        );
      case 'result3':
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4488018424">
              <p>七十四秒の旋律と孤独をAmazonで見る</p>
            </a>
          </div>
        );
      case 'result4':
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4062768534">
              <p>新世界より(上)をAmazonで見る</p>
            </a>
          </div>
        );
      case 'result5':
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4150314411">
              <p>日本SFの臨界点[怪奇篇] ちまみれ家族</p>
            </a>
          </div>
        );
      case 'result6':
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4150314314">
              <p>100文字SFをAmazonで見る</p>
            </a>
          </div>
        );
      case 'result7':
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4150313148">
              <p>最後にして最初のアイドルをAmazonで見る</p>
            </a>
          </div>
        );
      case 'result8':
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4150312648">
              <p>裏世界ピクニック ふたりの怪異探検ファイルをAmazonで見る</p>
            </a>
          </div>
        );
      default:
        return (
          <div>
            <a href="https://www.amazon.co.jp/dp/4150312648">
              <p>裏世界ピクニック ふたりの怪異探検ファイルをAmazonで見る</p>
            </a>
          </div>
        );
    }
  };

  const toTopButton = () => {
    if (toTop) {
      navigate('/');
    }
  };

  useEffect(() => {
    toTopButton();
  });

  return (
    <>
      <div className="container">
        <h1>
          あなたが出会った
          <br />
          SFは
          <br />
          「
          {Results[result].title}
          」
        </h1>
        <div className="explanation">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                variant="string"
                component="div"
                style={{ fontSize: '18px' }}
              >
                {texts}
              </Typography>
            </CardContent>
            { advertisement() }
            <br />
            <p>みんなに結果を伝えよう！</p>
            <br />
            <div className="share">
              <TwitterShareButton
                url={`https://close-encounter.gustave-studio.com/${result}`}
                title={['']}
              >
                <TwitterIcon size={50} round />
              </TwitterShareButton>
              <FacebookShareButton
                url={`https://close-encounter.gustave-studio.com/${result}`}
                quote={['']}
              >
                <FacebookIcon size={50} round />
              </FacebookShareButton>
              <LineShareButton url={`https://close-encounter.gustave-studio.com/${result}`}>
                <LineIcon size={50} round />
              </LineShareButton>
            </div>
          </Card>
        </div>
      </div>
      <br />
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <div>
            <Stack spacing={2} direction="row">
              <Grid item container direction="column" spacing={0}>
                <Button
                  style={{ backgroundColor: '#ff1493', fontSize: '20px' }}
                  variant="contained"
                  onClick={() => {
                    setToTop(true);
                    setQuestionNumber(0);
                  }}
                >
                  診断トップへ
                </Button>
              </Grid>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </>
  );
};

ResultPage.propTypes = {
  result: PropTypes.string.isRequired,
  setQuestionNumber: PropTypes.func.isRequired,
};

export default ResultPage;
