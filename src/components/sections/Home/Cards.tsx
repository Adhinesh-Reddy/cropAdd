import { Link } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';

type Props = {
  imgsrc: string;
  text: string;
  cid: number;
};

const Card = (props: Props) => {
  // const history = useHistory()
  // const routeChange = () => {
  // 	let path = '/symptom';
  // 	history.push(path);
  //   }

  return (
    <div className='card text-center'>
      <Link to={{ pathname: '/symptom', state: { para: props.cid } }} style={{ textDecoration: 'none', padding: 0 }}>
        <div className='overflow'>
          <img src={props.imgsrc} className='card-img-top' alt={props.text} />
          <br />
          <br />
          <br />
        </div>
        <div className='card-body text-dark'>
          <p style={{ fontSize: '4ch' }}>{props.text}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
