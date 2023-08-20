import React, { useState, useEffect } from 'react';
// import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

import { NewsCards, Modal, Navbar } from './components';
import useStyles from './styles';
import './App.css'

function App() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    alanBtn({
      key:import.meta.env.VITE_ALAN_KEY,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } 
        else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);

  const classes = useStyles();

  return (
    <>
    <div className={classes.logoContainer}>
      {newsArticles.length ? (
        <div className={classes.infoContainer}>
          <Navbar />
        </div>
      ) : null}
    </div>
    <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
  </>
  )
}

export default App;