export const companyName = "Precies. Software OÜ";
export const url = "https://precies.software";
export const linkedinProfile = "https://www.linkedin.com/in/aartvanbaren/";
export const githubProfile = "https://github.com/amvanbaren/";
export const organizationSchema = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "${companyName}",
  "url": "${url}",
  "logo": "${url}/logo.png",
  "sameAs": "${linkedinProfile}",
  "contactPoint": {
    "@type": "ContactPoint",
    "url": "https://calendly.com",
    "contactType": "sales"
  }
}`;
export const personSchema = `[{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "name": "Breadcrumbs",
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Home",
    "item": "${url}/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "About",
    "item": "${url}/about/"  
  }]
},{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Aart van Baren",
  "url": "${url}/about/",
  "image": "${url}/amvanbaren.png",
  "sameAs": [
    "${linkedinProfile}",
    "${githubProfile}"
  ],
  "jobTitle": "Software Consultant",
  "worksFor": {
    "@type": "Organization",
    "name": "${companyName}"
  }  
}]`;
export const serviceSchema = `[
   {
      "@context":"https://schema.org/",
      "@type":"BreadcrumbList",
      "name": "Breadcrumbs",
      "itemListElement":[
         {
            "@type":"ListItem",
            "position":1,
            "name":"Home",
            "item":"${url}/"
         },
         {
            "@type":"ListItem",
            "position":2,
            "name":"Consulting",
            "item":"${url}/consulting/"
         }
      ]
   },
   {
      "@context":"https://schema.org",
      "@type":"Service",
      "serviceType":"Software Consulting",
      "url":"${url}/consulting/",
      "provider":${organizationSchema},
      "potentialAction":{
         "@type":"ScheduleAction",
         "target":"https://calendly.com",
         "name":"Book a Fit Call"
      },
      "description":"Software consulting specializing in system reliability, performance optimization, and scalable software architecture for complex systems.",
      "hasOfferCatalog":{
         "@context":"https://schema.org",
         "@type":"OfferCatalog",
         "@id":"OfferCatalog",
         "name":"Software Consulting Services",
         "itemListElement":[
            {
               "@type":"Offer",
               "itemOffered":{
                  "@type":"Service",
                  "name":"Performance Optimization & Technical Diagnostics"
               }
            },
            {
               "@type":"Offer",
               "itemOffered":{
                  "@type":"Service",
                  "name":"Release Engineering & Workflow Improvements"
               }
            },
            {
               "@type":"Offer",
               "itemOffered":{
                  "@type":"Service",
                  "name":"Architecture & Feature Development"
               }
            }
         ]
      }
   }
]`;
