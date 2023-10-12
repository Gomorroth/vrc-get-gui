import Content from "../components/content";

export default function Page()
{
    return (
        <Content header={<Header/>}>
            
        </Content>
    )
}

function Header()
{
    return (
        <>
            <p className="ml-10 mb-5">ログ</p>
        </>
    )
}