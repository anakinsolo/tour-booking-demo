import {json} from '@shopify/remix-oxygen';

export const meta = ({data}) => {
  return {
    title: data?.collection?.title ?? 'Product',
    description: data?.collection?.description,
  };
};

export const loader = ({params}) => {
  const {handle} = params;
  return json({
    handle,
  });
};

export default function Product() {
  return <div>hello product</div>;
}
