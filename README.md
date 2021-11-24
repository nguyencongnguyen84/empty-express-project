# Kanji-Learner ![example workflow](https://github.com/RevenMyst/Kanji-Learner/actions/workflows/main.yml/badge.svg)
A website to learn kanjis and create your own quizzes. It's going to have many functions:
- See differents kanjis
- Learn them through repetition
- Create your own quizzes by selecting the kanjis you want to train on
# Server set up
In the backend directory :
First update in case of new module 
```shell
npm update
```
then you can boot the node server on the 3000 port
```shell
node server
```
# Database
Either our own database either https://www.kanjidatabase.com/sql.php,

```SQL 
SELECT id,Kanji,`JLPT-test`,`On within Joyo`,`Translation of On`,`Kun within Joyo`,`Translation of Kun` From KanjiTable WHERE `JLPT-test` = 5
```
# What is a Kanji
Each Kanji can have multiple On'yomi readings and multiple Kun'yomi readings each one linked with a different (yet close) meaning.
## On'yomi
Chinese reading : often used if compound words (multiple Kanjis)
## Kun'yomi
Japanese reading : often use if name or places (except 北海道 (ほっかいどう – Hokkaido) and 東京 (とうきょ う – Tokyo)) or single kanjis
# Learning method
# Quizzes

