import http from 'http';
import fs from 'fs';

Object.entries(http.STATUS_CODES).map(([key, value]) => {
	if(key.startsWith(4) || key.startsWith(5)) {
		const buffer = `app.get("/${value.replaceAll(" ", "")}", (req, res) => {
			return res.bang.${value.split(" ").map((x, index) => index === 0 ? x.toLowerCase() : x).join("")}()
		});

		app.get("/${value.replaceAll(" ", "")}/message", (req, res) => {
			return res.bang.${value.split(" ").map((x, index) => index === 0 ? x.toLowerCase() : x).join("")}("message")
		});\n\n
		`
		fs.appendFileSync("appcases.js", buffer);
	}
});


if(false)
Object.entries(http.STATUS_CODES).map(([key, value]) => {
	if(key.startsWith(4) || key.startsWith(5)) {
		const buffer = 
`
/**
 * @param {string} [message="${http.STATUS_CODES[key]}"] - message key for error message
 **/
bang.${value.split(' ').map((x, index) => index === 0 ? x.toLowerCase() : x).join("")} = (message = "${http.STATUS_CODES[key]}") => {
	this.send(${key}).json({
		error: "${value}",
		message: message,
		statusCode: ${key},
	})
}\n\n`
		fs.appendFileSync("test.js", buffer);
	}
});

if(false)
Object.entries(http.STATUS_CODES).map(([key, value]) => {
	if(key.startsWith(4) || key.startsWith(5)) {
		const buffer = `it("/${value.replaceAll(" ", "")}", async () => {
			const response = await request(app).get("/${value.replaceAll(" ", "")}");

			expect(response.status).toBe(${key});
			expect(response.error).toBe("${value}")
			expect(response.message).toBe("${value}")
		})\n\n`
		fs.appendFileSync("assert.js", buffer);
	}
})

if(false)
Object.entries(http.STATUS_CODES).map(([key, value]) => {
	if(key.startsWith(4) || key.startsWith(5)) {
		const buffer = `it("/${value.replaceAll(" ", "")}/message", async () => {
			const response = await request(app).get("/${value.replaceAll(" ", "")}/message");

			expect(response.status).toBe(${key});
			expect(response.error).toBe("${value}")
			expect(response.message).toBe("messsage")
		})\n\n`
		fs.appendFileSync("assert.js", buffer);
	}
});
