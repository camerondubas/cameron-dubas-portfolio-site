export default {
  id: "daily_programmer",
  title:'Daily Programmer Challenges',
  subtitle:'A Collection of solutions to programming logic puzzles',
  description: '<a href="https://www.reddit.com/r/DailyProgrammer">Daily Programmer</a> is a Subreddit that posts challenging programming logic problems for people to solve. I find it great for sharpening my programming skills and the way I go about thinking about a difficult problem as well as see how others go about solving these problems.',
  images:  [
    require('../../assets/images/dp.png'),
    require('../../assets/images/dp2x.png')
  ],
  links: [
    {
      text: 'GitHub',
      url: 'https://github.com/camerondubas/daily-programmer'
    }
  ],
  homepage: true,
  body: `
  <h2 class="c-project__title">An Overview</h2>
  <p>
    <a href="https://www.reddit.com/r/DailyProgrammer">Daily Programmer</a> is a Subreddit that posts challenging programming logic problems for people to solve.
    The posts range in difficulty, from easy to hard but even the "easy" ones can be quite challenging and require significant effort to solve.
    I like to work on these when I have some free time as they typically can be completed in a single session
    and help me develop my programming skills and the way I go about tackling a difficult problem.
  </p>

  <h3 class="c-project__subtitle">Learning from Others</h3>
  <p>
    Something I enjoy about the format of <a href="https://www.reddit.com/r/DailyProgrammer">Daily Programmer</a> is that it is, being a subreddit, inherently social.
    I can go into the post about any of these programming challenges, and see how others have solved the problem in different languages, and with different approaches.
    Beyond that, I can see discussion about the problem and answers to questions people attempting the challenges have. Overall it's a great place for learning programming techniques that, as a Web Developer, I am rarely exposed to.
  </p>

  <h3 class="c-project__subtitle">Reverse Factorial</h3>
  <p>
    Here's an example challenge called "#286 Reverse Factorial",
    First a quick math review: 5! (or 5 factorial) is the sum of every number from 1 to 5
    multiplied together (1 * 2 * 3 * 4 * 5 = 120).
    Our goal is to build function that when given "120" will spit out "5!".
  </p>

  <p><a href="https://github.com/camerondubas/daily-programmer/tree/master/286-easy">For the entire challenge description check out my Github Page</a>. This was my approach:</p>

  <iframe height='400' scrolling='no' title='bWaGoO'
    src='//codepen.io/camerondubas/embed/bWaGoO/?height=265&theme-id=dark&default-tab=js&embed-version=2'
    frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
    See the Pen
    <a href='http://codepen.io/camerondubas/pen/bWaGoO/'>bWaGoO</a>
    by Cameron Dubas (<a href='http://codepen.io/camerondubas'>@camerondubas</a>)
    on <a href='http://codepen.io'>CodePen</a>.
  </iframe>`
};
