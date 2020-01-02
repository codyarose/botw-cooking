import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'

export const PriceContainer = ({ price }: any) => {
	return (
		<StyledPrice>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.23 107.67" width="12">
				<g data-name="Layer 2">
					<g data-name="Layer 1">
						<path d="M.62 78.21C-.32 62.45 0 46.69.44 30.92c1.52-2.2 3.23-1.55 5-.39 2.32 1.49 4.67 2.93 7 4.39l.26 25.38-.19 12.87a2.09 2.09 0 01-.86.08c-1.24 0-2 .48-2.08 1.85a2.28 2.28 0 01-.86.14c-1.51 0-3-.09-3.12 2.07a1.72 1.72 0 01-1.75.9z" fill="#22801d" />
						<path d="M57.49 26.71c1.24 7.31.54 14.67.54 22 0 10.47.54 21-.38 31.43l-11.89-7-.11-38.44z" fill="#185217" />
						<path d="M57.49 26.71l-11.84 8c-1.6-1-2.5-2.85-4.43-3.35-.33-.32-.65-.65-1-1a3.56 3.56 0 00-2.13-1.82l-1-1.41a.63.63 0 00-.56-.56l-1.43-1.45-2.47-2.42-1.45-1h.05a3.33 3.33 0 00-1.93-2.2 50.76 50.76 0 00-.06-5.38c-.52-4.42 1.24-9-1-13.29.76-1.37 1.6-.83 2.3-.1 8.96 8.68 18.52 16.74 26.95 25.98z" fill="#183815" />
						<path d="M11.69 73.25a2.09 2.09 0 00.86-.08q.43 0 .87.09l15.64 15.93.09 18.48c-8-5.65-14.43-13-21.52-19.61-2.52-2.37-6-4-7-7.8a4.24 4.24 0 003.23-2.05 1.72 1.72 0 001.75-.9 4.47 4.47 0 003.12-2.07 2.28 2.28 0 00.86-.14z" fill="#193d16" />
						<path d="M29.15 107.67l-.09-18.48 2.17-3.09a6.64 6.64 0 002.89-2.9l1-1 1.91-1.92a11 11 0 006.87-7l1.83-.06 11.89 7c-2.94 5.42-8.14 8.65-12.4 12.77C40 98 35.08 103.37 29.15 107.67z" fill="#2d9927" />
						<path d="M23.24 5.77l2.93-2.89c2.31.3 2 2.06 2 3.66 0 4.5 0 9 .06 13.51l-.72.74-1.26 1.29a2.11 2.11 0 01-.05.66l-1 1-1 1-1 1-1 1-2 2-1 1a2.1 2.1 0 01-.66.08h-3.07l-.05-1.06c2-2.16 3.84-4.47 6-6.44s2.13-4.36 1.78-6.79-1.73-3.1-3.67-1.25c-4 3.82-7.95 7.67-11.93 11.5l-2.08 2.01c-4.35-2.08.48-3.79.24-5.68l.24-.29a1.45 1.45 0 00.67-.67l.33-.32a1.45 1.45 0 00.67-.67l.28-.25a5.68 5.68 0 003.52-3l9.05-8.95a2.71 2.71 0 002.72-2.19z" fill="#8efe50" />
						<path d="M5.76 22.11c.2 1.9-4.59 3.6-.24 5.68 2.79 2.64 5.57 5.32 9.88 4.78a2.27 2.27 0 00-.06 1h.08a1 1 0 00-1 1v-.14l-1.9.47c-2.34-1.46-4.69-2.9-7-4.39-1.8-1.16-3.51-1.81-5 .39-1.67-4.98 2.29-6.58 5.24-8.79z" fill="#9fda85" />
						<path d="M28.27 20.05c0-4.5 0-9-.06-13.51 0-1.6.27-3.36-2-3.66a3.35 3.35 0 012.09-2c2.22 4.28.46 8.87 1 13.29a50.92 50.92 0 01.06 5.39z" fill="#adfc74" />
						<path d="M11.46 16.89a5.68 5.68 0 01-3.52 3c.62-1.65 1.63-2.84 3.52-3z" fill="#9fda85" />
						<path d="M3.88 78.21a4.24 4.24 0 01-3.23 2.05v-2.05z" fill="#21a41c" />
						<path d="M23.24 5.77a2.71 2.71 0 01-2.73 2.17 3.45 3.45 0 012.73-2.17z" fill="#adfc74" />
						<path d="M6.68 21.15a1.45 1.45 0 01-.67.67c.23-.22.45-.44.67-.67zM7.66 20.16a1.45 1.45 0 01-.67.67c.23-.22.45-.44.67-.67z" fill="#9fda85" />
						<path d="M12.48 34.92l1.9-.47q.06 7.52.11 15v10.88l-1.71-.05z" fill="#0cd403" />
						<path d="M12.74 60.3l1.71.05q0 6.43.05 12.88h-1.08q-.43-.06-.87-.09.1-6.41.19-12.84z" fill="#16c609" />
						<path d="M8.75 75.24a4.47 4.47 0 01-3.12 2.07c.08-2.16 1.61-2.1 3.12-2.07zM11.69 73.25L9.61 75.1c.03-1.37.84-1.86 2.08-1.85z" fill="#21a41c" />
						<path d="M45.76 73.19l-1.83.06V53.44c-.51-7.33 1.84-15-2.93-21.79l.24-.25c1.93.5 2.83 2.4 4.43 3.35q.04 19.25.09 38.44z" fill="#16c609" />
						<path d="M14.49 49.47q-.06-7.5-.11-15v.14l1-1h-.08c.35-.36.69-.73 1-1.1v.11l1.06-1-.07.07 1.05-1.05-.06.07 1.05-1 1-1a1.79 1.79 0 002-2l1-1 1-1 1-1 1-1 5-1h-.05l1.45 1 2.49 2.52a1.71 1.71 0 001.43 1.45.65.65 0 01.57.56l1 1.41c0 .68 0 1.36-.07 2-3.89 6-11.1 9.12-14.08 16a1.91 1.91 0 01-1.66.75c-3.06-.57-5.35 1.26-7.92 2.07z" fill="#1eb316" />
						<path d="M31.23 21.69l-5 1a2.11 2.11 0 00.05-.66l1.26-1.29.72-.74 1-.54a3.29 3.29 0 011.97 2.23z" fill="#0cd403" />
						<path d="M38.05 30.64c0-.68 0-1.36.07-2a3.56 3.56 0 012.13 1.82l-.25.24z" fill="#16c609" />
						<path d="M40.25 30.42c.32.33.64.66 1 1l-.24.25-1-1zM38.11 28.64l-1-1.41c.33.47.67.94 1 1.41z" fill="#16c609" />
						<path d="M36.55 26.67a1.71 1.71 0 01-1.43-1.45zM32.63 22.7l-1.45-1z" fill="#0cd403" />
						<path d="M13.42 73.26h1.08c2.27-.08 3.07 2.27 4.88 3 3.68 3.62 6 8.9 11.85 9.9l-2.17 3.09z" fill="#1eb316" />
						<path d="M31.23 86.1c-5.85-1-8.17-6.28-11.85-9.9.6-2.73-3.06-5-1.47-7.37 2.33-3.42 4.79-7.3 9.25-8.2a9.32 9.32 0 005.65-3.45c2.94-3.64 6-6.61 11.1-3.74v19.81a10.11 10.11 0 00-6.87 7l-1.91 1.92-1 1a6.64 6.64 0 01-2.9 2.93z" fill="#21a41c" />
						<path d="M37.07 80.23a10.11 10.11 0 016.87-7 11 11 0 01-6.87 7zM34.12 83.2l1-1z" fill="#1eb316" />
						<path d="M7.59 25.7c4-3.83 7.94-7.68 11.93-11.5 1.94-1.85 3.31-1.22 3.67 1.25s.37 4.82-1.78 6.79-4 4.28-6 6.44c-2.98.02-4.67-3.42-7.82-2.98z" fill="#9afe55" />
						<path d="M7.59 25.7c3.15-.44 4.84 3 7.83 3 0 .35 0 .71.05 1.06 0 .94-.05 1.88-.07 2.83-4.31.54-7.09-2.14-9.88-4.78z" fill="#a5fe4c" />
						<path d="M15.4 32.57c0-.95 0-1.89.07-2.83h3.24a3 3 0 00-.39.91l.06-.06-1.05 1 .06-.07-1.05 1v-.11l-1 .13z" fill="#adfc74" />
						<path d="M22.33 26.69a1.79 1.79 0 01-2 2c.67-.69 1.34-1.34 2-2zM18.32 30.65a3 3 0 01.39-.91 2.1 2.1 0 00.66-.08zM23.31 25.7l-1 1zM24.29 24.71l-1 1zM25.28 23.72l-1 1zM26.26 22.73l-1 1z" fill="#0cd403" />
						<path d="M27.55 20.79l-1.26 1.29z" fill="#adfc74" />
						<path d="M15.4 32.62l1-.13c-.35.37-.69.74-1 1.1a2.27 2.27 0 010-.97z" fill="#0cd403" />
						<path d="M15.42 33.55l-1 1a1 1 0 011-1z" fill="#0cd403" />
						<path d="M43.91 53.44c-5.07-2.87-8.16.1-11.1 3.74a9.32 9.32 0 01-5.65 3.45c-4.46.9-6.92 4.78-9.25 8.2-1.59 2.33 2.07 4.64 1.47 7.37-1.81-.7-2.61-3-4.88-3q0-6.44-.05-12.88V49.44c2.57-.81 4.86-2.64 7.82-2.08a1.91 1.91 0 001.73-.72c3-6.88 10.19-10 14.08-16h2l1 1c4.67 6.75 2.32 14.47 2.83 21.8z" fill="#1fab19" />
						<path d="M17.33 31.63l1.05-1zM16.34 32.6l1.05-1z" fill="#0cd403" />
					</g>
				</g>
			</svg>
			<CountUp
				end={price || 0}
				redraw={true}
				preserveValue={true}
			/>
		</StyledPrice>
	)
}

const StyledPrice = styled.div`
	display: flex;
	align-items: center;
	font-style: italic;
	svg {
		margin-right: 4px;
	}
`
