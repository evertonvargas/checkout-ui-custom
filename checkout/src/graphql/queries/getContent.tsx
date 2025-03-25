// filepath: c:\Users\gabriel.martins\Desktop\Projetos\squadgrow\checkout-ui-custom\checkout\src\graphql\queries\getContent.gql
import gql from 'graphql-tag';

// export const GET_CONTENT = gql`
//   query GET_CONTENT {
//     listContent(
//       template: "brastemp.lp-brastemp-lavaloucas@1.x:store.custom#lp-brastemp-lavaloucas"
//       treePath: "store.custom#lp-brastemp-lavaloucas/lp-brastemp-lavaloucas/hero-carousel"
//     ) @context(provider: "vtex.pages-graphql") {
//       contentJSON
//     }
//   }
// `;

export const GET_CONTENT = gql`
  query GET_CONTENT {
    listContent(
      template: "squadgrow.store-theme@5.x:store.home"
      treePath: "store.home/list-context.image-list#demo"
    ) @context(provider: "vtex.pages-graphql") {
      contentJSON
    }
  }
`;