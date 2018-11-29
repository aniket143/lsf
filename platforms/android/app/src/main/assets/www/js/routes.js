routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/aboutus/',
    url: './pages/aboutus.html',
  },
    {
    path: '/show_attendance/',
    url: './pages/show_attendance.html',
  },
  
   {
    path: '/contact/',
    url: './pages/contact.html',
  },
   {
    path: '/about/',
    url: './pages/about.html',
  },
   {
    path: '/home/',
    url: './pages/home.html',
  },
  {
    path: '/save_photo/',
    url: './pages/save_photo.html',
  },
    {
    path: '/feedback/',
    url: './pages/feedback.html',
  },
    {
    path: '/self_prac/',
    url: './pages/self_prac.html',
  },
  {
    path: '/signup/',
    url: './pages/signup.html',
  },
  {
    path: '/showpdf/',
    url: './pages/showpdf.html',
  },
   {
    path: '/teacherask/',
    url: './pages/teacherask.html',
  },
   {
    path: '/havefuneng/',
    url: './pages/havefuneng.html',
  },
     {
    path: '/listening_video/',
    url: './pages/listening_video.html',
  },
     {
    path: '/listenvideo1/',
    url: './pages/listenvideo1.html',
  },
     {
    path: '/listenvideo2/',
    url: './pages/listenvideo2.html',
  },
     {
    path: '/listenvideo3/',
    url: './pages/listenvideo3.html',
  },
  {
    path: '/feedback_colors/',
    url: './pages/feedback_colors.html',
  },
  {
    path: '/feedback_headandshow/',
    url: './pages/feedback_headandshow.html',
  },
   {
    path: '/feedback_stringofaction/',
    url: './pages/feedback_stringofaction.html',
  },
   {
    path: '/self_prac_colors1/',
    url: './pages/self_prac_colors1.html',
  },
    {
    path: '/self_prac_colors2/',
    url: './pages/self_prac_colors2.html',
  },
    {
    path: '/self_prac_stringofaction/',
    url: './pages/self_prac_stringofaction.html',
  },
      {
    path: '/self_prac_headandshow/',
    url: './pages/self_prac_headandshow.html',
  },
   {
    path: '/voicecapture/',
    url: './pages/voicecapture.html',
  },
     {
    path: '/voicecapture_colors1/',
    url: './pages/voicecapture_colors1.html',
  },
     {
    path: '/voicecapture_colors2/',
    url: './pages/voicecapture_colors2.html',
  },
     {
    path: '/voicecapture_headandshow/',
    url: './pages/voicecapture_headandshow.html',
  },
  {
    path: '/voicecapture_stringofaction/',
    url: './pages/voicecapture_stringofaction.html',
  },
    {
    path: '/voicecapture_spellcheck/',
    url: './pages/voicecapture_spellcheck.html',
  },
   {
    path: '/videopage/',
    url: './pages/videopage.html',
  },
    {
    path: '/videopage1/',
    url: './pages/videopage1.html',
  },
     {
    path: '/videopage2/',
    url: './pages/videopage2.html',
  },
     {
    path: '/videopage3/',
    url: './pages/videopage3.html',
  },
     {
    path: '/videopage4/',
    url: './pages/videopage4.html',
  },
     {
    path: '/videopage5/',
    url: './pages/videopage5.html',
  },
    {
    path: '/videopage6/',
    url: './pages/videopage6.html',
  },
   {
    path: '/memory/',
    url: './pages/memory.html',
  },
  {
    path: '/uploadimg/',
    url: './pages/uploadimg.html',
  },  
  
  {
    path: '/catalog/',
    componentUrl: './pages/catalog.html',
  },
  {
    path: '/pdfdon/',
    componentUrl: './img/ELDVPS.pdf',
  },
  {
    path: '/product/:id/',
    componentUrl: './pages/product.html',
  },
  {
    path: '/settings/',
    url: './pages/settings.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {

    path: '/videopage.html/:t_id/:t_idId/:youtube_link/:youtube_linkId/self_practice/:self_practiceID/pdf_link/:pdf_linkID/own_voice/:own_voiceID/feedback/:feedbackID/',
    componentUrl: './pages/videopage.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
