export const updateSEO = (title: string, description: string, keywords?: string) => {
  // Update document title
  document.title = title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);

  // Update keywords if provided
  if (keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
  }

  // Update Open Graph tags
  const updateOGTag = (property: string, content: string) => {
    let ogTag = document.querySelector(`meta[property="${property}"]`);
    if (!ogTag) {
      ogTag = document.createElement('meta');
      ogTag.setAttribute('property', property);
      document.head.appendChild(ogTag);
    }
    ogTag.setAttribute('content', content);
  };

  updateOGTag('og:title', title);
  updateOGTag('og:description', description);

  // Update Twitter tags
  const updateTwitterTag = (name: string, content: string) => {
    let twitterTag = document.querySelector(`meta[name="${name}"]`);
    if (!twitterTag) {
      twitterTag = document.createElement('meta');
      twitterTag.setAttribute('name', name);
      document.head.appendChild(twitterTag);
    }
    twitterTag.setAttribute('content', content);
  };

  updateTwitterTag('twitter:title', title);
  updateTwitterTag('twitter:description', description);
};

