import { ContainerProps } from "./Container.types"

function Container({ children }: ContainerProps) {
    return (
        <div className="flex-1 overflow-y-auto">
            <div className="">{children}</div>
        </div>
    )
}

export default Container