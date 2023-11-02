import Link from 'next/link';
import Proptypes from 'prop-types';

const PostCardContent = ({ postData }) => (
  //첫 번째 게시글 #해시태그 #익스프레스
  <div>
    {postData.split(/(#[^\s#]+)/g).map((v, i) => {
      if (v.match(/(#[^\s#]+)/)) {
        return (
          <Link href={`/hashtag/${v.slice(1)}`} key={i}>
            {v}
          </Link>
        );
      }
      return v;
    })}
  </div>
);

PostCardContent.propTypes = { postData: Proptypes.string.isRequired };

export default PostCardContent;
