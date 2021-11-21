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

  const { result } = props;
  const texts = Results[result].containts.split('\n').map((item) => (
    <div key={item}>
      {item}
    </div>
  ));

  const advertisement = () => {
    switch (result) {
      case 'result1':
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4122022878&linkId=d6a22d246b734078e09651ecdda5a7d4&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
        );
      case 'result2':
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4040721578&linkId=c9de6ccba05e1c73b038350808a464d5&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
        );
      case 'result3':
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4488018424&linkId=ca458dba6961daf13072c65d061268e6&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
        );

      case 'result4':
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4062768534&linkId=be9a86ec880535c2fcfc98808496e9bc&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
        );
      case 'result5':
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B08CRYNGLF&linkId=79aaa5089ece79f3418c7ae21368f76a&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
        );
      case 'result6':
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4150314314&linkId=6bb476525e52d2ad0317b111403d5286&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
        );
      case 'result7':
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4150313148&linkId=83cd26ffdbbe26e60f52288e7ea3efc0&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
        );
      case 'result8':
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4150312648&linkId=c4158388b619d2bec8815e2c3ee18013&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
        );
      default:
        return (
          <iframe title="advertisement" className="advertisement" style={{ width: '120px', height: '240px' }} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=gustave02-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4150312648&linkId=c4158388b619d2bec8815e2c3ee18013&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr" />
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
          あなたが出会ったSFは
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
            <TwitterShareButton
              url={`https://close-encounter-4d1f3.web.app/${result}`}
              title={['']}
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>
            <FacebookShareButton
              url={`https://close-encounter-4d1f3.web.app/${result}`}
              quote={['']}
            >
              <FacebookIcon size={50} round />
            </FacebookShareButton>
            <LineShareButton url={`https://close-encounter-4d1f3.web.app/${result}`}>
              <LineIcon size={50} round />
            </LineShareButton>
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
};

export default ResultPage;
