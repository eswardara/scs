fetch("https://blog.scstechindia.com/wp-json/wp/v2/posts?per_page=3&_embed")
  .then((response) => response.json())
  .then((data) => {
    const latestBlogContainer = document.getElementById("latestBlogContainer");
    
    // Prepare an array to store in localStorage
    const recentBlogsData = [];

    data.forEach((post) => {
      const postTitle = post.title.rendered.length > 45 
        ? post.title.rendered.substr(0, 60) + '...' 
        : post.title.rendered;
      
      const featuredImageURL = post._embedded["wp:featuredmedia"][0].source_url;
      const postDate = new Date(post.date);
      const formattedDate = postDate.toLocaleString('en-US', { month: 'short', day: '2-digit' });

      const blogObject = {
        postLink: post.link,
        featuredImageURL: featuredImageURL,
        postTitle: postTitle,
        formattedDate: formattedDate,
        originalTitle: post.title.rendered
      };

      // Push the object to the array
      recentBlogsData.push(blogObject);

      const blogPostHTML = `
        <div class="col-12 col-lg-4 mb-3">
          <div class="circleSection">
            <div class="circle-container">
              <div class="rotating-circle"></div>
              <div class="main-image">
                <a href="${post.link}" target="_blank">
                    <img loading="lazy"  src="${featuredImageURL}" alt="${postTitle}">
                </a>
              </div>
              <div class="date-circle">
                <span>${formattedDate.split(" ")[0]}</span>
                <span>${formattedDate.split(" ")[1]}</span>
              </div>
            </div>
          </div>
          <p class="blog-paragraph">${postTitle}</p>
        </div>
      `;

      latestBlogContainer.insertAdjacentHTML("beforeend", blogPostHTML);
    });

    // Save the blog links to localStorage
    localStorage.setItem('recentBlogsData', JSON.stringify(recentBlogsData));
  })
  .catch((error) => console.error("Error fetching blog posts:", error));




