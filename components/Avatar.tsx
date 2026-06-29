interface AvatarProps {
    size: number;
    online?: boolean;
}

export function Avatar({ size, online }: AvatarProps) {
    return (
        <div className = "relative flex-shrink-0">
            <div 
                className = "rounded-full bg-[#3a3a3a] flex items-center justify-center"
                style={{ width: size, height: size }}>

                    {/* <User size={size * 0.6} /> */}
            </div>

            {online && (
                <div 
                    className = "absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-gray-900"
                    style={{ width: size * 0.25, height: size * 0.25 }}></div>
            )}
        </div>
    )
}