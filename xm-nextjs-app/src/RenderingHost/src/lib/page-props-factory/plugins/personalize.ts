import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { Plugin } from '..';
import { getPersonalizedRewriteData, personalizeLayout } from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import {ComponentRendering} from  '@sitecore-jss/sitecore-jss-nextjs';
class PersonalizePlugin implements Plugin {
  order = 2;

  async exec(props: SitecorePageProps, context: GetServerSidePropsContext | GetStaticPropsContext) {
    const path =
      context.params === undefined
        ? '/'

        : Array.isArray(context.params.path)
        ? context.params.path.join('/')
        : context.params.path ?? '/';
       

    // Get variant for personalization (from path)
    const personalizeData = getPersonalizedRewriteData(path);
    //personalizeData.
    console.log(`${personalizeData.variantId}xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
  
    console.log(`${props.layoutData.sitecore.route?.placeholders["headless-main"].map(
      function(i){ 
        if(i as ComponentRendering)
       {
          let a=i as ComponentRendering
           if(a.fields !==undefined)
           {
            a.fields
           }
       }
      }

    )} nnnnnnnnnnnnnnxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
    // Modify layoutData to use specific variant instead of default
    // This will also set the variantId on the Sitecore context so that it is accessible here
      personalizeLayout(props.layoutData, personalizeData.variantId);

    return props;
  }
}


export const personalizePlugin = new PersonalizePlugin();
