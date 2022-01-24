export default function Root(props) {
  console.log('react mounted');
  return <section>{props.name} is mounted!</section>;
}
