import { HavePermission } from '@lanaqi/rsr';

export default function HelloPage() {
  return (
    <>
      <h1>我是 HelloPage</h1>
      <HavePermission term={'admin'}>
        <h1>我是admin权限才显示</h1>
      </HavePermission>
    </>
  );
}
