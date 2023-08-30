import { ContainerProps } from "./Container.types"

function Container({ children }: ContainerProps) {
    return (
        <div className="min-h-[calc(100vh-152px)] flex flex-col">
            <div className="">{children}</div>
        </div>
    )
}

export default Container